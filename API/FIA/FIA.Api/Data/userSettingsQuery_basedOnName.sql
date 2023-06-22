DECLARE @UserId uniqueidentifier

SELECT @UserId = Id
FROM [dbo].Users
WHERE Name = 'admin@0'

DECLARE @UserSettingsId uniqueidentifier

SET @UserSettingsId = NEWID()

INSERT INTO UserSettings (Id, PrimaryColor, SecondaryColor, AccentColor, AccentColorHover, DangerColor, TextColor)
VALUES (@UserSettingsId, '#313A43', '#74818C', '#A9EEE6', '#19F9DF', '#dc3545', '#ffffff')
