import json
  
# Load JSONs
f_new = open('./public/music_list_taoji.json')
f_old = open('./song_list_legacy.json')
  
data_new = json.load(f_new)
data_old = json.load(f_old)
  
f_new.close()
f_old.close()

# Create Simple List

song_new = []
song_old = []
added = []

for song in data_new:
    song_new.append({'name': song['song_name'], 'artist': song['artist']})
    
for song in data_old:
    song_old.append({'name': song['song_name'], 'artist': song['artist']})
    
# 新增
print("新增")
for song in song_new:
    if song not in song_old:
        print("\t" + song["artist"] + " - " + song["name"])
        added.append(song)
        
# 去除
print("去除")
for song in song_old:
    if song not in song_new:
        print("\t" + song["artist"] + " - " + song["name"])
        
with open("./public/added_songs.json", 'w') as file:
    file.write(json.dumps(added))
