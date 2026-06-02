import urllib.request

urls = [
    ("jensen.jpg", "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/board-of-directors/jensen-huang-1-c.jpg"),
    ("sam.jpg", "https://techcrunch.com/wp-content/uploads/2023/11/Sam-Altman-OpenAI-2023-e1700257002540.jpg"),
    ("naval.jpg", "https://i.insider.com/5fcd172d80d2d300192e2e98"),
    ("sharan.jpg", "https://images.livemint.com/img/2023/10/05/600x338/Sharan_Hegde_1696495537537_1696495546197.jpg")
]

req_headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

for name, url in urls:
    req = urllib.request.Request(url, headers=req_headers)
    try:
        with open("public/" + name, 'wb') as f:
            f.write(urllib.request.urlopen(req).read())
        print(f"Success: {name}")
    except Exception as e:
        print(f"Error {name}: {e}")
