const Q_1Z0_815_JPN_04 = {
    prefix: "1Z0-815-JPN",
    part: "04",
    questions: [
        {
            id: 1,
            category: "制御構造",
            difficulty: "初級",
            question:
                "コンソールに0～4までの数字を順に表示したい。プログラムの5行目の空欄に入るコードとして、正しいものを選びなさい。",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int a = 11;\n 4.         int b = 0;\n 5.         while (__________) {\n 6.             if (5 < a) {\n 7.                 System.out.println(b);\n 8.             }\n 9.             a--;\n10.             b++;\n11.         }\n12.     }\n13. }",
            choices: [
                "<code>b < 5</code>",
                "<code>5 < b</code>",
                "<code>5 < a</code>",
                "<code>a < 5</code>",
                "<code>true</code>",
                "<code>false</code>",
            ],
            answerIndex: 0,
            explanation:
                "このプログラムは、0から4までの数字を順に表示するためのループ条件を問う問題です。\n\nwhile文の条件式には、ループを何回繰り返すかを決める式を入れる必要があります。\n\nbは0から始まり、ループの最後でb++により1ずつ増えていきます。\n\n条件式がb < 5の場合、bが0,1,2,3,4のときにループが実行されます。\n\nループ内のif文はaが5より大きい場合にbを出力しますが、aは11から始まり毎回1ずつ減るため、最初の5回は常に5より大きく、bの値がそのまま出力されます。\n\nしたがって、画面には0から4までの数字が順に表示されます。\n\n他の条件式では、ループ回数や出力内容が変わってしまうため正解ではありません。\n\nループの回数や変数の増減に注目して、正しい条件式を選ぶことがポイントです。",
        },
        {
            id: 2,
            category: "制御構造",
            difficulty: "初級",
            question:
                "コンソールに0～4までの数字を表示したい。プログラムの空欄[1]と[2]に入るコードの組み合わせとして、正しいものを選びなさい。",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int a = 0;\n 4.         [1]__________ {\n 5.             System.out.println(a++);\n 6.         } [2]__________\n 7.     }\n 8. }",
            choices: [
                "<code>[1]do (a < 5) [2]while;</code>",
                "<code>[1]do (5 < a) [2]while;</code>",
                "<code>[1]do [2]while (a < 5);</code>",
                "<code>[1]do [2]while (5 < a);</code>",
            ],
            answerIndex: 2,
            explanation:
                "このプログラムは、0から4までの数字を表示するためのdo-while文の正しい書き方を問う問題です。\n\ndo-while文は、必ず1回は処理を実行し、その後に条件判定を行います。\n\n正しい構文は「do { ... } while (条件);」です。\n\nこのプログラムでは、変数aは0から始まり、ループ内でa++により1ずつ増えていきます。\n\nwhile (a < 5) の条件でループが続くため、aが0,1,2,3,4のときにSystem.out.println(a++)が実行され、0から4までの数字が順に表示されます。\n\n他の選択肢は構文が誤っていたり、条件が逆になっていたりするため、正しく0～4を出力できません。\n\ndo-while文の構文と、ループ条件の意味を正しく理解することがポイントです。",
        },
        {
            id: 3,
            category: "制御構造",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int a = 0;\n 4.         while (a < 5)\n 5.             do {\n 6.                 a++;\n 7.                 System.out.print(a);\n 8.             } while (true);\n 9.     }\n10. }",
            choices: [
                "012が表示される",
                "012が5回表示される",
                "何も表示されない",
                "無限ループになる",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 4,
            explanation:
                "設問のコードは、while文の後にdo-while文が続いていますが、波括弧（{ }）で囲まれていません。\n\nJavaでは、while文やif文などの制御構造で波括弧を省略した場合、直後の1文だけがその制御構造の対象となります。\n\nこの場合、while (a < 5) の直後にdo-while文全体を1文として扱おうとしていますが、do-while文は「do { ... } while (条件);」という構文で1文とみなされるためには、doの後に必ず波括弧が必要です。\n\n波括弧がないと、do-while文の終わりが正しく認識されず、構文エラー（コンパイルエラー）となります。\n\nしたがって、このプログラムはコンパイルエラーになります。",
        },
        {
            id: 4,
            category: "制御構造",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         for (int i = 1, long j = 2; i < 5; i++) {\n 4.             System.out.print(i + j);\n 5.         }\n 6.     }\n 7. }",
            choices: [
                "「2468」と表示される",
                "「246810」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "このプログラムはfor文の初期化部で「int i = 1, long j = 2;」と記述しています。\n\nJavaのfor文では、初期化部で複数の変数を宣言する場合、すべて同じ型でなければなりません。\n\nint型とlong型のように異なる型を同時に宣言することはできません。\n\nそのため、このコードはコンパイルエラーとなります。\n\nfor文で複数の変数を宣言したい場合は、型を1回だけ書き、カンマで区切って同じ型の変数を並べる必要があります。",
        },
        {
            id: 5,
            category: "制御構造",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int a = 1;\n 4.         for (int b = 2, total = 0; b <= 5; b++) {\n 5.             total = a * b;\n 6.         }\n 7.         System.out.println(total);\n 8.     }\n 9. }",
            choices: [
                "「2」「3」「4」と表示される",
                "「2」「3」「4」「5」と表示される",
                "「0」と表示される",
                "何も表示されない",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 4,
            explanation:
                "このプログラムでは、for文の初期化部でint型の変数bとtotalを宣言し、ループ内でtotalにaとbの積を代入しています。\n\nしかし、totalはfor文の初期化部で宣言されているため、スコープ（有効範囲）はfor文のブロック内だけです。\n\nfor文の外（7行目）でtotalを参照しようとすると、「変数が見つからない」という意味のコンパイルエラーになります。\n\n変数のスコープに注意し、for文の外で使いたい場合は、for文の外で宣言する必要があります。",
        },
        {
            id: 6,
            category: "制御構造",
            difficulty: "初級",
            question:
                "次のプログラムを実行し、コンソールに「0」と表示したい。3行目の空欄に入るコードとして正しいものを選びなさい。",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         for (int i = 0; ______; i++) {\n 4.             System.out.println(i);\n 5.         }\n 6.     }\n 7. }",
            choices: [
                "<code>i < 0</code>",
                "<code>i == 0</code>",
                "<code>0 < i</code>",
                "<code>1 < 2</code>",
            ],
            answerIndex: 1,
            explanation:
                "このプログラムは、for文の条件式に何を入れれば「0」と1回だけ表示されるかを問う問題です。\n\nfor (int i = 0; i == 0; i++) とすると、\n・iは0から始まる\n・条件式 i == 0 が最初は真なのでループが1回実行される\n・ループ内でSystem.out.println(i)により0が表示される\n・ループ後、iが1になり、条件式 i == 0 は偽となるので終了\n\nこのように、条件式にi == 0を指定すると、0が1回だけ表示されます。\n\n他の条件式では、ループが1回も実行されなかったり、複数回実行されたりして、意図した出力になりません。",
        },
        {
            id: 7,
            category: "制御構造",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         for (int i = 0, j = 0; i < 3, j < 5; i++) {\n 4.             System.out.println(i++);\n 5.             j += i;\n 6.         }\n 7.     }\n 8. }",
            choices: [
                "「0」「1」「2」と表示される",
                "「0」「2」「4」と表示される",
                "「1」「2」「3」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 3,
            explanation:
                "このプログラムのfor文では、条件部に「i < 3, j < 5」とカンマで2つの条件が書かれています。\n\nJavaのfor文の条件部（2番目のセクション）は、1つの論理式しか記述できません。カンマで複数の条件を並べることはできません。\n\nカンマ区切りが使えるのは初期化部（1番目）と更新部（3番目）だけです。\n\nそのため、このコードは構文エラーとなり、コンパイルエラーが発生します。\n\n複数の条件を指定したい場合は、論理演算子（&&や||）を使って1つの式にまとめる必要があります。",
        },
        {
            id: 8,
            category: "制御構造",
            difficulty: "上級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         for (int i = 0; i < 3; i++, period()) {\n 4.             System.out.print(i);\n 5.         }\n 6.     }\n 7.     private static void period() {\n 8.         System.out.print(",");\n 9.     }\n10. }',
            choices: [
                "「0,1,2,」と表示される",
                "「,0,1,2」と表示される",
                "「0,1,2」と表示される",
                "「,0,1,2,」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                "このプログラムはfor文の更新部でメソッドperiod()を呼び出しています。\n\nfor文の動作は次の通りです。\n\n1. 初期化: int i = 0\n2. 条件判定: i < 3 ならループ継続\n3. ループ本体: System.out.print(i) でiの値を出力\n4. 更新部: i++ と period() の両方が実行される\n\nperiod()メソッドは呼ばれるたびに「,」を出力します。\n\nこのため、ループ1回ごとに\n・iの値が出力され\n・その直後に「,」が出力されます。\n\nループはi=0,1,2の3回実行され、各回で「数字,」の順に出力されます。\n\n最終的な出力は「0,1,2,」となります。\n\nfor文の更新部でメソッド呼び出しができること、\nperiod()がループごとに呼ばれることがポイントです。",
        },
        {
            id: 9,
            category: "制御構造",
            difficulty: "中級",
            question:
                "次のプログラムを実行し、コンソールに「10」と表示したい。6行目の空欄に入るコードとして正しいものを選びなさい。",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int array[][] = new int[][] {{1,2}, {2,3,4}};\n 4.         int total = 0;\n 5.         for (int i = 0; i < array.length; i++) {\n 6.             for (__________) {\n 7.                 total += array[i][j];\n 8.             }\n 9.         }\n10.         System.out.println(total);\n11.     }\n12. }",
            choices: [
                "<code>int j = 0; j < array[i].length; j++</code>",
                "<code>int j = 0; j < array[j].length; j++</code>",
                "<code>int j = i; j < array[i].length; j++</code>",
                "<code>int j = i; j < array[j].length; j++</code>",
            ],
            answerIndex: 2,
            explanation:
                "このプログラムは二重配列の合計値を求める問題です。\n\n外側のfor文でiを0からarray.length-1まで動かし、内側のfor文でjを動かして各要素をtotalに加算します。\n\n内側ループの空欄には、\nint j = i; j < array[i].length; j++\nと記述することで、各行のi番目から末尾までを合計できます。\n\narrayの内容は\n・array[0] = {1,2}（長さ2）\n・array[1] = {2,3,4}（長さ3）\nです。\n\ni=0のとき、j=0,1で1+2=3\ni=1のとき、j=1,2で3+4=7\n合計は3+7=10となります。\n\n他の選択肢では、\njの初期値やループ条件が誤っているため、\n・配列の範囲外アクセスで例外が発生したり\n・合計値が意図と異なったりします。\n\n正しいループ制御と配列のインデックスに注目することがポイントです。",
        },
        {
            id: 10,
            category: "制御構造",
            difficulty: "中級",
            question:
                "次のプログラムの3行目の空欄に記述すると無限ループになるコードを選びなさい。（3つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         for (__________) {\n 4.             System.out.println(i);\n 5.         }\n 6.     }\n 7. }",
            choices: [
                "<code>int i=0; true; i++</code>",
                "<code>int i=0; false; i++</code>",
                "<code>int i=0; ; i++</code>",
                "<code>int i=0; i<5;</code>",
            ],
            answerIndex: [0, 2, 3],
            explanation:
                "この問題は、for文の条件式によって無限ループになるケースを問うものです。\n\nfor文の条件部がtrueの場合や、条件部自体を省略した場合、ループが終了する条件が存在しないため、繰り返しが止まりません。\n\nまた、条件部が存在しても、更新部や初期化部の内容によっては、ループ変数が変化せず、永遠に条件を満たし続ける場合も無限ループになります。\n\n具体的には、\n・条件式がtrueの場合（for (int i=0; true; i++)）\n・条件式が省略されている場合（for (int i=0; ; i++)）\n・更新部や初期化部のみで、終了条件がない場合（for (int i=0; i<5;)）\nなどが該当します。\n\n一方、条件式がfalseの場合は、最初からループが1回も実行されません。\n\nfor文の条件部がどのような意味を持つか、また省略やtrueを指定した場合の動作を理解することがポイントです。",
        },
        {
            id: 11,
            category: "制御構造",
            difficulty: "中級",
            question:
                "次のプログラムの4行目の空欄に記述するコードとして、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String[][] array = { { "A", "B", "C" } };\n 4.         for (①) {\n 5.             System.out.print(obj);\n 6.         }\n 7.     }\n 8. }',
            choices: [
                "<code>Object obj : array</code>",
                "<code>String str : array</code>",
                "<code>String[] array : array</code>",
                "<code>array : Object obj</code>",
                "<code>array : String str</code>",
                "<code>array : String[] array</code>",
            ],
            answerIndex: 0,
            explanation:
                'この問題は、二重配列（多次元配列）に対する拡張for文の書き方を問うものです。\n\nString[][] array = { { "A", "B", "C" } };\nこの配列は、一次元配列の配列（＝二重配列）です。\n\n拡張for文で二重配列をループする場合、\nfor (型 変数 : 配列)\nの「型」には、配列の各要素の型を指定します。\n\nこの場合、arrayの各要素はString[]型（一次元配列）です。\n\nまた、配列はObject型としても受け取れるため、\nfor (Object obj : array)\nと書くことで、各要素（一次元配列）をObject型の変数objで受け取ることができます。\n\n他の型（StringやString[]など）を指定すると、型が一致せずエラーになります。\n\n二重配列の拡張for文では、\n・各要素が何型か\n・Object型で受け取れること\nに注目することがポイントです。',
        },
        {
            id: 12,
            category: "制御構造",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル・実行した結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String[] array = { "A", "B", "C" };\n 4.         for (String s : array) {\n 5.             s = "D";\n 6.         }\n 7.         for (String s : array) {\n 8.             System.out.print(s);\n 9.         }\n10.     }\n11. }',
            choices: [
                "「DDD」と表示される",
                "「ABC」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                'このプログラムは、拡張for文で配列の要素を書き換えた場合の動作を問う問題です。\n\n拡張for文（for-each文）で使われる変数sは、配列の各要素の値を一時的に受け取るための変数です。\n\nfor (String s : array) {\n    s = "D";\n}\nこのようにsに新しい値を代入しても、sは元の配列の要素そのものではなく「値のコピー」を持っているだけなので、配列自体は変更されません。\n\nそのため、2つ目のfor文で配列の内容を出力すると、元の配列のまま「A」「B」「C」が表示されます。\n\n拡張for文の変数に値を代入しても、配列やリストの中身は変わらないことに注意しましょう。\n\n配列の要素自体を変更したい場合は、通常のfor文でインデックスを使って直接代入する必要があります。',
        },
        {
            id: 13,
            category: "制御構造",
            difficulty: "中級",
            question: "次のコードと同じ結果を出力するコードを選びなさい。（1つ選択）",
            code: "1. int num = 10;\n2. do {\n3.     num++;\n4. } while (++num < 10);\n5. System.out.println(num);",
            choices: [
                "<code>int num = 10;\nwhile (++num < 10) {\n    num++;\n}\nSystem.out.println(num);</code>",
                "<code>int num = 10;\nwhile (++num <= 10) {\n    num++;\n}\nSystem.out.println(num);</code>",
                "<code>int num = 10;\nwhile (num++ < 10) {\n    num++;\n}\nSystem.out.println(num);</code>",
                "<code>int num = 10;\nwhile (num++ <= 10) {\n    num++;\n}\nSystem.out.println(num);</code>",
                "他の選択肢はすべて誤りである",
            ],
            answerIndex: 4,
            explanation:
                "この問題は、do-while文とインクリメント演算子の動作を正しく理解できているかを問うものです。\n\n設問のコードは次の通りです。\nint num = 10;\ndo {\n    num++;\n} while (++num < 10);\nSystem.out.println(num);\n\nこのコードの動作を順に追うと、\n1. まずnumは10で開始\n2. doブロックでnum++により11になる\n3. whileの条件で++num（前置インクリメント）により12となり、12 < 10は偽\n4. ループを抜けてSystem.out.println(num)で12が出力される\n\nこのように、do-while文の中と条件式の両方でインクリメントが行われるため、numは一気に2増えます。\n\n選択肢の中には、この動作とまったく同じ結果（12を出力）になるコードはありません。\n\nしたがって、「他の選択肢はすべて誤りである」が正解となります。\n\nインクリメントの前置・後置の違いと、do-while文の流れを丁寧に追うことがポイントです。",
        },
        {
            id: 14,
            category: "制御構造",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル・実行した結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String[] array = { "A", "B" };\n 4.         for (String a : array) {\n 5.             for (String b : array) {\n 6.                 if ("B".equals(b)) {\n 7.                     break;\n 8.                 }\n 9.                 System.out.print(b);\n10.             }\n11.         }\n12.     }\n13. }',
            choices: [
                "「AA」と表示される",
                "「ABAB」と表示される",
                "「A」と表示される",
                "「AB」と表示される",
                "「BB」と表示される",
            ],
            answerIndex: 0,
            explanation:
                'このプログラムは、二重ループとbreak文の動作を問う問題です。\n\n外側のfor文で配列の各要素をaに、内側のfor文で同じ配列の各要素をbに代入してループします。\n\n内側ループでは、bが"B"と等しい場合にbreak文で内側ループを抜けます。\n\nそのため、bが"A"のときだけSystem.out.print(b)が実行され、bが"B"になるとすぐに内側ループが終了します。\n\nこの処理が外側ループの回数分繰り返されるため、\n・1回目の外側ループで"A"が出力\n・2回目の外側ループでも"A"が出力\n\n最終的な出力は「AA」となります。\n\nbreak文の働きと、ループの流れを丁寧に追うことがポイントです。',
        },
        {
            id: 15,
            category: "制御構造",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル・実行した結果として正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int[] array = { 1, 2, 3, 4, 5 };\n 4.         int total = 0;\n 5.         for (int v : array) {\n 6.             if (v % 2 == 0)\n 7.                 continue;\n 8.                 total += v;\n 9.         }\n10.         System.out.println(total);\n11.     }\n12. }",
            choices: [
                "1が表示される",
                "9が表示される",
                "15が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                "このプログラムは、配列の要素をfor-each文で順に取り出し、合計値を計算する問題です。\n\nループ内でif文により、要素vが偶数の場合はcontinue文でその回の処理をスキップします。\n\ncontinue文が実行されると、その後のtotal += v;は実行されません。\n\nしたがって、偶数の値（2と4）は合計に含まれず、奇数の値（1、3、5）だけが加算されます。\n\n計算の流れは次の通りです。\n・v=1 → 奇数なので合計に加算（total=1）\n・v=2 → 偶数なのでスキップ\n・v=3 → 奇数なので合計に加算（total=4）\n・v=4 → 偶数なのでスキップ\n・v=5 → 奇数なので合計に加算（total=9）\n\n最終的に出力されるのは9です。\n\ncontinue文の働きと、合計値の計算過程に注目することがポイントです。",
        },
        {
            id: 16,
            category: "制御構造",
            difficulty: "上級",
            question: "次の中から、ラベルが記述できるものをすべて選びなさい。",
            code: "",
            choices: ["if文", "switch文", "for文", "式", "代入", "return文", "tryブロック"],
            answerIndex: [0, 1, 2],
            explanation:
                "この問題は、Javaでラベルが記述できる構文を問うものです。\n\nラベルは、制御構造（if文、switch文、for文など）の直前に記述できます。\n\nラベルの書き方は次の通りです。\nlabel名: 制御構造\n\n主にbreak文やcontinue文と組み合わせて、複数の入れ子になったループやswitch文から一気に抜ける場合などに使われます。\n\n一方、式や代入、return文、tryブロックなどの前にはラベルを付けることはできません。\n\nラベルが使えるのは、\n・if文\n・switch文\n・for文\nなどの制御構造のみです。\n\nラベルの使いどころや、どの構文に付けられるかを正しく理解することがポイントです。",
        },
        {
            id: 17,
            category: "制御構造",
            difficulty: "上級",
            question:
                "次のプログラムをコンパイル・実行した結果として正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int total = 0;\n 4.         a: for (int i = 0; i < 5; i++) {\n 5.             b: for (int j = 0; j < 5; j++) {\n 6.                 if (i % 2 == 0) continue a;\n 7.                 if (3 < j) break b;\n 8.                 total += j;\n 9.             }\n10.         }\n11.         System.out.println(total);\n12.     }\n13. }",
            choices: [
                "6が表示される",
                "12が表示される",
                "20が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation: "処理されるのはi=1,3の2回。各回でj=0+1+2=3を加算し合計6+6=12。",
            explanation:
                "このプログラムは、ラベル付きのfor文とbreak/continueを使った制御の流れを問う問題です。\n\na:外側のfor文でiを0から4まで繰り返し、b:内側のfor文でjを0から4まで繰り返します。\n\n内側ループでiが偶数のときは「continue a;」により、外側ループの次のiへスキップします。\n\niが奇数のときだけ、jが0から4までループしますが、「if (3 < j) break b;」でjが4になった時点で内側ループを抜けます。\n\njが0,1,2,3のときだけtotalに加算されるので、1回のiで合計6（0+1+2+3）加算されます。\n\niが奇数（1と3）の2回だけこの処理が行われるため、totalは6+6=12となります。\n\nラベル付きcontinueやbreakの動作、ループの回数、加算される値に注目することがポイントです。",
        },
    ],
};
