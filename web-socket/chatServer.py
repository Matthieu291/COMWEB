import asyncio
import websockets

client =[]

async def chatServer(websocket, path):
    client.append(websocket); 
    async for message in websocket:
        for x in client:
            print(message)
            await client.send(message)

start_server = websockets.serve(chatServer, "localhost", 12345)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()

