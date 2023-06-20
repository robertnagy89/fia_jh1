using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

public class ChatGptClient
{
    private readonly HttpClient httpClient;
    private const string chatGptEndpoint = "https://api.openai.com/v1/engines/davinci-codex/completions";

    public ChatGptClient()
    {
        httpClient = new HttpClient();
        httpClient.DefaultRequestHeaders.Add("Authorization", "Bearer YOUR_API_KEY");
    }

    public async Task<string> GenerateChatResponse(string message)
    {
        try
        {
            var requestBody = new
            {
                prompt = message,
                max_tokens = 50
            };

            var json = Newtonsoft.Json.JsonConvert.SerializeObject(requestBody);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            var response = await httpClient.PostAsync(chatGptEndpoint, content);

            if (response.IsSuccessStatusCode)
            {
                var responseContent = await response.Content.ReadAsStringAsync();
                return responseContent;
            }
            else
            {
                Console.WriteLine($"ChatGPT request failed with status code: {response.StatusCode}");
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"An error occurred while making a ChatGPT request: {ex.Message}");
        }

        return null;
    }
}