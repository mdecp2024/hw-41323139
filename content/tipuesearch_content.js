var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲: https://github.com/mdecp2024/hw-41323139 \n 個人網站: https://mdecp2024.github.io/hw-41323139/content/index.html \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w7', 'text': '\n \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w10', 'text': '\n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11_hw', 'text': '1.\xa0 已知可以用 Python 程式 由上往下列印三角形 * , 或 由左往右列印三角形 * , 請將此程式延伸到可以在 10x10 的字元區域中, 以 "*" 字元列印出圓型區域. 完成後請將程式碼存入個人 Gist 後, 直接在個人作業網站中的 Brython 頁面中執行. (提示: ?src=gist_script_URL) \n 利用"*"畫成的圓 \n 2. 已知可以在網頁中利用 Brython 繪製方格與塗色, 如下連結, 請設法修改此一程式, 直接將程式存入個人的 Gist, 並利用黑色方塊圍出一個圓形區域. \n 網頁上的方格與塗色 \n 3. 完成上列題目後, 請利用 Youtube 影片 簡報 個人的解題過程與心得. \n \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12', 'text': 'hw1: 使用迴圈及列印的程式 \n \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w12_hw', 'text': '08_for_range \n 範例: 列印朋友與最愛食物對應關係 \n 說明: \n \n \n friends  和  dishes ： \n \n 定義兩個清單： friends  包含朋友的名字， dishes  包含他們最喜歡的食物。 \n \n \n \n 列印清單內容 ： \n \n 使用  print  來顯示清單和其內容。 \n \n \n \n for  迴圈 ： \n \n 使用  for  迴圈搭配  range  函數遍歷清單，列印每個元素的索引及值。 \n \n \n \n 結合清單資訊 ： \n \n 使用最後一個迴圈將朋友名字與他們最喜歡的食物結合，格式化顯示。 \n \n \n \n \n # 定義朋友的名字清單\nfriends = ["Geetha", "Luca", "Daisy", "Juhan"]  # 朋友們的名字\n# 定義食物的名字清單\ndishes  = ["sushi", "burgers", "tacos", "pizza"]  # 他們最喜歡的食物\n\n# 列印朋友的名字\nprint("My friends\' names are:")  # 顯示 "我的朋友的名字是："\nprint(friends)  # 顯示朋友名字的清單\n\n# 迴圈遍歷朋友清單，顯示每個朋友的索引和值\nfor index in range(0, 4):  # 從索引 0 遍歷到 3\n    print("index:  " + str(index))  # 顯示當前的索引\n    print("friend: " + friends[index])  # 顯示對應索引的朋友名字\n\n# 列印他們最喜歡的食物\nprint("Their favorite dishes are:")  # 顯示 "他們最喜歡的食物是："\nprint(dishes)  # 顯示食物清單\n\n# 迴圈遍歷食物清單，顯示每個食物的索引和值\nfor index in range(0, 4):  # 從索引 0 遍歷到 3\n    print("index:  " + str(index))  # 顯示當前的索引\n    print("dish: " + dishes[index])  # 顯示對應索引的食物\n\n# 結合兩個清單，顯示朋友和他們最喜歡的食物\nfor index in range(0, 4):  # 從索引 0 遍歷到 3\n    print("My friend " + friends[index] + "\'s favorite dish is " + dishes[index])\n    # 顯示每位朋友最喜歡的食物\n \n \n 09_for_loop_if_equals \n 範例: 動物清單與目標搜尋 \n 說明: \n \n \n animals  清單 ： \n \n 定義了一個包含三種動物名稱的清單： giraffe （長頸鹿）、 penguin （企鵝）、 dolphin （海豚）。 \n \n \n \n 第一次迴圈：列印動物及其位置 ： \n \n 使用  for  迴圈和  range  函數來遍歷清單，列印每個動物的索引和名稱。 \n 顯示每次迴圈的起點，並列出動物及其在清單中的位置。 \n \n \n \n 定義目標動物 ： \n \n 設定變數  wanted_to_see  為想看到的動物「企鵝」。 \n \n \n \n 第二次迴圈：檢查目標動物 ： \n \n 再次遍歷清單，判斷當前動物是否為目標動物。 \n 若是目標動物，則列印特殊訊息；否則僅列印看到的動物。 \n \n \n \n \n # 定義動物清單\nanimals = ["giraffe", "penguin", "dolphin"]  # 動物清單：長頸鹿、企鵝、海豚\nprint(animals)  # 列印整個清單內容\n\n# 使用 for 迴圈遍歷清單，並顯示每個動物及其位置\nfor i in range(0, len(animals)):  # 使用 range() 遍歷清單，索引從 0 到清單長度 - 1\n    print("-- Beginning of loop --")  # 提示每次迴圈的開始\n    # 列印每個元素的位置及其值\n    print("The element in position " + str(i) + " is " + animals[i])  \n    # 顯示目前索引位置的動物名稱\n\n# 定義想看到的動物\nwanted_to_see = "penguin"  # 定義目標動物為企鵝\n\n# 再次遍歷動物清單，檢查是否遇到想看到的動物\nfor i in range(0, len(animals)):\n    # 如果目前的動物是想看到的動物\n    if animals[i] == wanted_to_see:\n        # 列印出這是你真正想看到的動物\n        print("I saw a " + animals[i] + " and I really wanted to see it!")\n    # 如果目前的動物不是想看到的動物\n    else:\n        # 只是列印出你看到了這個動物\n        print("I saw a " + animals[i])\n \n \n \n 10_for_search \n 範例: 使用條件篩選與索引操作配件清單 \n 說明: \n \n \n 清單定義與列印 ： \n \n accessories  包含多種配件名稱。 \n 使用  print  列印出清單內容。 \n \n \n \n 迴圈與條件判斷 ： \n \n 使用  for  迴圈和  range  遍歷每個配件，配合條件判斷其字元長度或位置是否符合特定條件。 \n \n \n \n 條件分類 ： \n \n 判斷字元長度是否等於、小於、大於或不等於門檻值，並根據條件篩選元素。 \n 判斷索引位置是否小於、等於或大於門檻值，篩選元素並列印相關資訊。 \n \n \n \n 門檻值變數 ： \n \n 使用  n_of_characters  與  position  來設定字元長度和索引位置的判斷標準，以便靈活控制篩選條件。 \n \n \n \n \n \n \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13_hw', 'text': '\n \n \n from browser import html\nfrom browser import document as doc\n \n# Create canvas element\ncanvas = html.CANVAS(width=500, height=500)\nbrython_div = doc["brython_div1"]\nbrython_div <= canvas\n \n# Define circle centers and radius\nx1, y1 = 200, 200  # Center of the first circle\nx2, y2 = 300, 300  # Center of the second circle\nradius = 141.4  # Radius of the circles\n \nctx = canvas.getContext("2d")\n \n# Draw the first circle (fill color and border color)\nctx.beginPath()\nctx.arc(x1, y1, radius, 0, 2 * 3.14159)\nctx.fillStyle = "lightcoral"  # Fill color for the first circle\nctx.fill()\nctx.lineWidth = 2\nctx.strokeStyle = "darkgreen"  # Border color for the first circle\nctx.stroke()\n \n# Draw the second circle (fill color and border color)\nctx.beginPath()\nctx.arc(x2, y2, radius, 0, 2 * 3.14159)\nctx.fillStyle = "plum"  # Fill color for the second circle\nctx.fill()\nctx.lineWidth = 2\nctx.strokeStyle = "navy"  # Border color for the second circle\nctx.stroke()\n \n# Fill the intersection area of the two circles\nctx.save()\nctx.beginPath()\nctx.arc(x1, y1, radius, 0, 2 * 3.14159)\nctx.clip()  # Set the clipping area to the first circle\nctx.beginPath()\nctx.arc(x2, y2, radius, 0, 2 * 3.14159)\nctx.fillStyle = "lightcyan"  # Color for the intersection\nctx.fill()\nctx.restore()\n \n# Draw the first square (orange border, light yellow fill)\nctx.beginPath()\nctx.rect(100, 100, 200, 200)\nctx.fillStyle = "lightyellow"  # Fill color for the first square\nctx.fill()\nctx.lineWidth = 2\nctx.strokeStyle = "orange"  # Border color for the first square\nctx.stroke()\n \n# Draw the second square (brown border, pale green fill)\nctx.beginPath()\nctx.rect(200, 200, 200, 200)\nctx.fillStyle = "palegreen"  # Fill color for the second square\nctx.fill()\nctx.strokeStyle = "brown"  # Border color for the second square\nctx.stroke()\n \n# Draw the borders of the circles (border colors retained)\nctx.beginPath()\nctx.arc(x1, y1, radius, 0, 2 * 3.14159)\nctx.lineWidth = 3\nctx.strokeStyle = "darkgreen"\nctx.stroke()\n \nctx.beginPath()\nctx.arc(x2, y2, radius, 0, 2 * 3.14159)\nctx.lineWidth = 3\nctx.strokeStyle = "navy"\nctx.stroke()\n \n# Draw the diagonal line on top and separately\nctx.beginPath()\nctx.moveTo(100, 100)\nctx.lineTo(300, 300)\nctx.strokeStyle = "darkred"  # Diagonal line color\nctx.lineWidth = 2\nctx.stroke()\n \n  導入 brython 程式庫  \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w14', 'text': '請根據三個圓繪圖所圍成的區域 進行不同顏色著色, 條件是當各圓半徑與圓心座標變動時, 程式只需輸入三個圓的圓心座標與半徑, 就可以完成各區域的著色任務 \n 程式連結 \n from browser import html\nfrom browser import document as doc\nimport random\nimport math\n\n# 定義一個函式來初始化畫布\ndef initialize_canvas(canvas_width=400, canvas_height=400, id="brython_div1"):\n    """\n    初始化畫布，創建一個指定大小的 Canvas 元素，並將其加到 HTML 文件中。\n    返回畫布元素和它的 2D 繪圖上下文。\n    """\n    canvas = html.CANVAS(width=canvas_width, height=canvas_height)\n    brython_div = doc[id]\n    brython_div <= canvas\n    ctx = canvas.getContext("2d")\n    return canvas, ctx\n\n# 定義一個隨機顏色生成函式\ndef random_color_generator():\n    r = random.randint(0, 255)\n    g = random.randint(0, 255)\n    b = random.randint(0, 255)\n    return f"rgb({r}, {g}, {b})"\n\n# 判斷點 (px, py) 是否在圓內\ndef is_point_in_circle(px, py, cx, cy, r):\n    return (px - cx) ** 2 + (py - cy) ** 2 <= r ** 2\n\n# 主函式：繪製並填充多個圓的區域\ndef draw_circles_dynamic():\n    """\n    根據使用者輸入的圓心座標與半徑，繪製多個圓，並填充各區域。\n    使用者需要輸入每個圓的信息，包含 (cx, cy, r)，即圓心座標和半徑。\n    """\n    # 輸入圓的數量\n    num_circles = int(input("請輸入圓的數量: "))\n\n    # 初始化圓的參數列表\n    circles = []\n    for i in range(num_circles):\n        print(f"請輸入第 {i + 1} 個圓的參數:")\n        cx = int(input("圓心 x 座標: "))\n        cy = int(input("圓心 y 座標: "))\n        r = int(input("半徑: "))\n        circles.append((cx, cy, r))\n\n    canvas, ctx = initialize_canvas(400, 400)\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n\n    color_dict = {}\n    \n    for py in range(canvas.height):\n        for px in range(canvas.width):\n            # 檢查當前點在哪些圓內\n            in_circles = [i for i, (cx, cy, r) in enumerate(circles) if is_point_in_circle(px, py, cx, cy, r)]\n\n            # 決定顏色\n            if len(in_circles) > 1:\n                key = "intersection"\n            elif len(in_circles) == 1:\n                key = f"circle{in_circles[0]}"\n            else:\n                key = "background"\n\n            if key not in color_dict:\n                color_dict[key] = random_color_generator() if key != "background" else "white"\n\n            # 填充顏色\n            ctx.fillStyle = color_dict[key]\n            ctx.fillRect(px, py, 1, 1)\n\n# 呼叫函式來繪製圓\ndraw_circles_dynamic()\n \n', 'tags': '', 'url': 'w14.html'}, {'title': 'w15', 'text': '題目一: 請利用 Gist 與 Brython 程式環境, 在個人的課程網站中新增一個頁面, 標題為 w15, 以"從 1 累加到 100"作為 anchor 的連結標題, 使用者點擊該連結之後, 可從各自的 Brython 頁面執行程式. \n 從 1 累加到 100 \n sum = 0\n\nfor i in range(0,101):\n    sum += i\nprint(sum) \n \n 題目二: 延伸上題, 設計一個函式 addto(1, 100), 可以完成上述的累加結果. (以"addto"作為連結標題) \n addto \n def addto(x,y):\n  sum = 0\n  for i in range(x,y+1):\n    sum += i\n  print(sum)\n\naddto(0,100) \n \n 題目三: 延伸上題, 設計一個函式 add_only_even(1, 100), 可以完成從第一個輸入整數, 累加到第二個輸入變數的累加結果. 頁面中請以\xa0add_only_even 作為連結標題. \n add_only_even \n def addto(x,y):\n  sum = 0\n  for i in range(x,y+1):\n    sum += i\n    print(sum)\n\naddto(0,100) \n \n 題目四: 延伸上題, 設計一個函式 add_avoid_8(1, 100), 可以完成從第一個輸入整數, 累加到第二個輸入變數的累加過程, 必須避開數字出現"8"的整數,\xa0頁面中請以\xa0add_avoid_8 作為連結標題. \n add_avoid_8 \n def add_avoid_8(start, end):\n    """\n    累加從 start 到 end 的所有整數，避開包含數字 8 的整數。\n    :param start: 起始整數\n    :param end: 結束整數\n    :return: 符合條件的累加結果\n    """\n    total = 0\n    for num in range(start, end + 1):\n        if \'8\' not in str(num):  # 判斷是否包含數字 8\n            total += num\n    return total\n\n# 測試範例\nresult = add_avoid_8(1, 100)\nprint("累加結果:", result) \n \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'HW 2', 'text': '', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'w16_exam1', 'text': '請以 自己的學號最後四碼 作為繪圖的座標原點, (例如: 若學號最後四碼為 3139, 請將 (31,39) 作為繪圖座標原點), 並以 pixel=2 的黑色直線分別利用 Brython 繪圖, 標示出向右為正的 X 軸, 以及向下為正的 Y 軸, 並且利用文字標示出原點座標 (例如: (31, 39)), 之後請自選最左側圖形的起始點座標, 直接在頁面畫出下列圖像, 繪圖程式除了必須直接列在頁面 html 檔案外, 也請存入自己的 Gist 區域, 並在所完成的 圖像下方, 以自選標題的 anchor 連結至 Gist, 讓使用者點擊該連結後, 可以在各自的 Brython 頁面中繪出下列圖像 \n w16_exam1 \n \n \n from browser import html\nfrom browser import document as doc\nfrom math import pi, sin, cos, sqrt\n\n# 設置畫布尺寸\nCANVAS_WIDTH = 800\nCANVAS_HEIGHT = 600\n\n# 設置原點\norigin_x, origin_y = 31, 39\npixel = 2\n\n# 創建畫布\ndef create_canvas():\n    canvas = html.CANVAS(width=CANVAS_WIDTH, height=CANVAS_HEIGHT)\n    canvas.style.border = "1px solid black"\n    doc <= canvas\n    return canvas\n\ncanvas = create_canvas()\nctx = canvas.getContext("2d")\n\n# 標示原點\ndef draw_origin():\n    ctx.fillStyle = "black"\n    ctx.beginPath()\n    ctx.arc(origin_x, origin_y, 3, 0, 2 * pi)\n    ctx.fill()\n    ctx.font = "14px Arial"\n    ctx.fillText(f"({origin_x},{origin_y})", origin_x + 5, origin_y - 5)\n\n# 畫直線的函數\ndef draw_line(x1, y1, x2, y2):\n    ctx.beginPath()\n    ctx.moveTo(x1, y1)\n    ctx.lineTo(x2, y2)\n    ctx.lineWidth = pixel\n    ctx.strokeStyle = "black"\n    ctx.stroke()\n\n# 繪製 X 軸和 Y 軸\ndef draw_axes():\n    draw_line(0, origin_y, CANVAS_WIDTH, origin_y)  # X 軸\n    draw_line(origin_x, 0, origin_x, CANVAS_HEIGHT)  # Y 軸\n\n# 繪製正六邊形\ndef draw_hexagon(x, y, size):\n    ctx.beginPath()\n    for i in range(6):\n        angle = pi / 3 * i\n        x_i = x + size * cos(angle)\n        y_i = y + size * sin(angle)\n        if i == 0:\n            ctx.moveTo(x_i, y_i)\n        else:\n            ctx.lineTo(x_i, y_i)\n    ctx.closePath()\n    ctx.fillStyle = "lightblue"  # 填充顏色\n    ctx.fill()  # 填充顏色\n\n# 繪製更尖且縮小的菱形\ndef draw_sharp_small_diamond(x, y, size):\n    ctx.beginPath()\n    # 調整菱形的頂部和底部，使其更尖並縮小\n    ctx.moveTo(x, y - size * 1.2)  # 上頂點 (更尖)\n    ctx.lineTo(x + size * 0.8, y)  # 右頂點 (縮小)\n    ctx.lineTo(x, y + size * 1.2)  # 下頂點 (更尖)\n    ctx.lineTo(x - size * 0.8, y)  # 左頂點 (縮小)\n    ctx.closePath()\n    ctx.fillStyle = "lightgreen"  # 填充顏色\n    ctx.fill()  # 填充顏色\n\n# 繪製縮小的三角形\ndef draw_triangle(x, y, size):\n    height = size * sqrt(3) / 2\n    ctx.beginPath()\n    ctx.moveTo(x, y)  # 左下角\n    ctx.lineTo(x + size, y)  # 右下角\n    ctx.lineTo(x + size / 2, y - height)  # 上頂點\n    ctx.closePath()\n    ctx.fillStyle = "lightcoral"  # 填充顏色\n    ctx.fill()  # 填充顏色\n\n# 繪製圓形\ndef draw_circle(x, y, radius):\n    ctx.beginPath()\n    ctx.arc(x, y, radius, 0, 2 * pi)\n    ctx.closePath()\n    ctx.fillStyle = "yellow"  # 填充顏色\n    ctx.fill()  # 填充顏色\n\n# 繪製正方形\ndef draw_square(x, y, size):\n    ctx.beginPath()\n    ctx.rect(x, y, size, size)\n    ctx.closePath()\n    ctx.fillStyle = "lightpink"  # 填充顏色\n    ctx.fill()  # 填充顏色\n\n# 繪製長方形\ndef draw_rectangle(x, y, width, height):\n    ctx.beginPath()\n    ctx.rect(x, y, width, height)\n    ctx.closePath()\n    ctx.fillStyle = "lightyellow"  # 填充顏色\n    ctx.fill()  # 填充顏色\n\n# 主繪圖函數\ndef draw_shapes():\n    draw_origin()\n    draw_axes()\n    \n    # 設定每個形狀的起始位置\n    start_x, start_y = origin_x + 50, origin_y + 50\n\n    # 繪製正六邊形（不變）\n    draw_hexagon(start_x, start_y, 40)  # 六邊形\n    \n    # 繪製更尖且縮小的菱形\n    draw_sharp_small_diamond(start_x + 120, start_y, 30)  # 更尖且縮小的菱形\n    \n    # 繪製縮小的三角形，並放置在菱形的右下角\n    triangle_size = 25  # 縮小的三角形大小\n    triangle_x = start_x + 120 + 40  # 菱形右下角的 x 坐標\n    triangle_y = start_y + 40  # 菱形右下角的 y 坐標\n    draw_triangle(triangle_x, triangle_y, triangle_size)  # 三角形\n    \n    # 繪製圓形\n    circle_x = start_x + 250\n    circle_y = start_y\n    draw_circle(circle_x, circle_y, 40)  # 圓形\n    \n    # 計算正方形和長方形的 y 坐標，使其與圓形的中心對齊\n    square_y = circle_y - 30  # 正方形的中心對齊圓形中心\n    rectangle_y = circle_y - 30  # 長方形的中心對齊圓形中心\n    \n    # 繪製正方形\n    draw_square(start_x + 320, square_y, 60)  # 正方形\n    \n    # 繪製長方形\n    draw_rectangle(start_x + 410, rectangle_y, 100, 60)  # 長方形\n\n# 執行繪圖\ndraw_shapes()\n \n', 'tags': '', 'url': 'w16_exam1.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};