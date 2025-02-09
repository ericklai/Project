from twilio.rest import Client

account_sid = 'ACc2c10abcbb31d13066538e4b84470502'
auth_token = '[38e6beeecfc342a9c9b64f09b8c9c330]'
client = Client(account_sid, auth_token)

message = client.messages.create(
  from_='+12768776329',
  to='+2540799498111'
)

print(message.sid)