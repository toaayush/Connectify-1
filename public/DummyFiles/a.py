for i in range(1,51):
    with open(f'./public/DummyFiles/abc2.json', 'a') as f:
        f.write(f'{{"content" : "{i}Lorem ipsum, dolor sit amet consectetur adipisicing elit.{i}"}},\n')
# import os
# for i in range(1,51):
#     os.remove(f'./public/DummyFiles/{i}.txt')