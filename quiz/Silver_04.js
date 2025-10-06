const JAVA_SILVER_1Z0_815_JPN_04 = {
    prefix: "1Z0-815-JPN_04",
    questions: [
        {
            id: 1,
            category: "制御構造",
            difficulty: "初級",
            question:
                "コンソールに0～4までの数字を順に表示したい。プログラムの5行目の空欄に入るコードとして、正しいものを選びなさい。",
            code: "public class Main {\n  public static void main(String[] args) {\n    int a = 11;\n    int b = 0;\n    while ( [ ] ) {\n      if (5 < a) {\n        System.out.println(b);\n      }\n      a--;\n      b++;\n    }\n  }\n}",
            choices: ["b < 5", "5 < b", "5 < a", "a < 5", "true", "false"],
            answerIndex: 0,
            explanation: "ループが5回行われる条件は b < 5 のみ。（bが0～4のときに実行される）",
        },
        {
            id: 2,
            category: "制御構造",
            difficulty: "初級",
            question:
                "コンソールに0～4までの数字を表示したい。プログラムの空欄①と②に入るコードの組み合わせとして、正しいものを選びなさい。",
            code: "public class Main {\n  public static void main(String[] args) {\n    int a = 0;\n    ① {\n      System.out.println(a++);\n    } ②\n  }\n}",
            choices: [
                "①do (a < 5) ②while;",
                "①do (5 < a) ②while;",
                "①do ②while (a < 5);",
                "①do ②while (5 < a);",
            ],
            answerIndex: 2,
            explanation:
                "do-while文の正しい構文は「do { ... } while (条件);」であり、a < 5 の条件により0～4が出力される。",
        },
        {
            id: 3,
            category: "制御構造",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
            code: "public class Main {\n  public static void main(String[] args) {\n    int a = 0;\n    while (a < 5)\n      do {\n        a++;\n        System.out.print(a);\n      } while (true);\n  }\n}",
            choices: [
                "012が表示される",
                "012が5回表示される",
                "何も表示されない",
                "無限ループになる",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 3,
            explanation:
                "while (true) により無限ループとなり、aが5に到達しても終了条件がなく無限に実行される。",
        },
        {
            id: 4,
            category: "制御構造",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
            code: "public class Main {\n  public static void main(String[] args) {\n    for (int i = 1, long j = 2; i < 5; i++) {\n      System.out.print(i + j);\n    }\n  }\n}",
            choices: [
                "[2468] と表示される",
                "[246810] と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "for文の初期化部に異なる型の変数宣言を並べることはできないためコンパイルエラーになる。",
        },
        {
            id: 5,
            category: "制御構造",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
            code: "public class Main {\n  public static void main(String[] args) {\n    int a = 1;\n    for (int b = 2, total = 0; b <= 5; b++) {\n      total = a * b;\n    }\n    System.out.println(total);\n  }\n}",
            choices: [
                "[2][3][4] と表示される",
                "[2][3][4][5] と表示される",
                "[0] と表示される",
                "何も表示されない",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "ループ終了後のtotalの値は最後の計算a*5=5となるが、ループ終了後に一度だけSystem.out.println(total)が呼ばれるので「5」が表示される。",
        },
        {
            id: 6,
            category: "制御構造",
            difficulty: "初級",
            question:
                "次のプログラムを実行し、コンソールに「0」と表示したい。3行目の空欄に入るコードとして正しいものを選びなさい。",
            code: "public class Main {\n  public static void main(String[] args) {\n    for (int i = 0; ______; i++) {\n      System.out.println(i);\n    }\n  }\n}",
            choices: ["i < 0", "i == 0", "0 < i", "1 < 2"],
            answerIndex: 1,
            explanation: "条件式にi==0とすると、i=0の1回だけループが実行され「0」が表示される。",
        },
        {
            id: 7,
            category: "制御構造",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
            code: "public class Main {\n  public static void main(String[] args) {\n    for (int i = 0, j = 0; i < 3, j < 5; i++) {\n      System.out.println(i++);\n      j += i;\n    }\n  }\n}",
            choices: [
                "[0][1][2] と表示される",
                "[0][2][4] と表示される",
                "[1][2][3] と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 3,
            explanation: "for文の条件部にカンマ区切りは使用できずコンパイルエラーとなる。",
        },
        {
            id: 8,
            category: "制御構造",
            difficulty: "上級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
            code: 'public class Main {\n  public static void main(String[] args) {\n    for (int i = 0; i < 3; i++, period()) {\n      System.out.print(i);\n    }\n  }\n  private static void period() {\n    System.out.print(".");\n  }\n}',
            choices: [
                "[0,1,2] と表示される",
                "[0,1,2,] と表示される",
                "[0.1.2.] と表示される",
                "[0,1,2,] と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "for文の更新部でメソッドを呼び出すことが可能であり、iの値と同時にperiod()の「.」が出力されるので「0.1.2.」となる。",
        },
        {
            id: 9,
            category: "制御構造",
            difficulty: "中級",
            question:
                "次のプログラムを実行し、コンソールに「10」と表示したい。6行目の空欄に入るコードとして正しいものを選びなさい。",
            code: "public class Main {\n  public static void main(String[] args) {\n    int array[][] = new int[][] {{1,2}, {2,3,4}};\n    int total = 0;\n    for (int i = 0; i < array.length; i++) {\n      for ( ______ ) {\n        total += array[i][j];\n      }\n    }\n    System.out.println(total);\n  }\n}",
            choices: [
                "int j = 0; j < array[i].length; j++",
                "int j = 0; j < array[j].length; j++",
                "int j = i; j < array[i].length; j++",
                "int j = i; j < array[j].length; j++",
            ],
            answerIndex: 0,
            explanation:
                "2次元配列を走査するには「int j=0; j<array[i].length; j++」とするのが正しい。",
        },
        {
            id: 10,
            category: "制御構造",
            difficulty: "中級",
            question:
                "次のプログラムの3行目の空欄に記述すると無限ループになるコードを選びなさい。（3つ選択）",
            code: "public class Main {\n  public static void main(String[] args) {\n    for ( ______ ) {\n      System.out.println(i);\n    }\n  }\n}",
            choices: [
                "int i=0; true; i++",
                "int i=0; false; i++",
                "int i=0; ; i++",
                "int i=0; i<5; i++",
            ],
            answerIndex: [0, 2],
            explanation:
                "for文で条件がtrueまたは省略された場合、終了条件がなく無限ループになる。falseの場合は1回も実行されない。",
        },
        {
            id: 11,
            category: "制御構造",
            difficulty: "中級",
            question:
                "次のプログラムの4行目の空欄①に記述するコードとして、正しいものを選びなさい。（1つ選択）",
            code: 'public class Main {\n  public static void main(String[] args) {\n    String[][] array = { { "A", "B", "C" } };\n    for (①) {\n      System.out.print(obj);\n    }\n  }\n}',
            choices: [
                "Object obj : array",
                "String str : array",
                "String[] arr1 : array",
                "array : Object obj",
                "array : String str",
                "array : String[] arr",
            ],
            answerIndex: 0,
            explanation:
                "二重配列のfor-eachでは各要素は一次元配列（Objectとして受け取れる）。よって「Object obj : array」が正しい。",
        },
        {
            id: 12,
            category: "制御構造",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル・実行した結果として正しいものを選びなさい。（1つ選択）",
            code: 'public class Main {\n  public static void main(String[] args) {\n    String[] array = { "A", "B", "C" };\n    for (String s : array) {\n      s = "D"; // ループ変数に代入\n    }\n    for (String s : array) {\n      System.out.print(s);\n    }\n  }\n}',
            choices: [
                "DDDと表示される",
                "ABCと表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                "拡張forの変数sは要素のコピー。sに代入しても元配列は変わらないため出力はABC。",
        },
        {
            id: 13,
            category: "制御構造",
            difficulty: "中級",
            question: "次のコードと同じ結果を出力するコードを選びなさい。（1つ選択）",
            code: "int num = 10;\ndo {\n  num++;\n} while (++num < 10);\nSystem.out.println(num);",
            choices: [
                "<pre><code>int num = 10;\nwhile (++num < 10) {\n    num++;\n}\nSystem.out.println(num);</pre></code>",
                "<pre><code>int num = 10;\nwhile (++num <= 10) {\n    num++;\n}\nSystem.out.println(num);</pre></code>",
                "<pre><code>int num = 10;\nwhile (num++ < 10) {\n    num++;\n}\nSystem.out.println(num);</pre></code>",
                "<pre><code>int num = 10;\nwhile (num++ <= 10) {\n    num++;\n}\nSystem.out.println(num);</pre></code>",
                "選択肢A～Dはすべて誤りである",
            ],
            answerIndex: 4,
            explanation:
                "問題文のdo-while内外の前置/後置インクリメントの効果を合わせると、出力されるのは12。12を出力するコードは選択肢に存在しない。",
        },
        {
            id: 14,
            category: "制御構造",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル・実行した結果として正しいものを選びなさい。（1つ選択）",
            code: 'public class Main {\n  public static void main(String[] args) {\n    String[] array = { "A", "B" };\n    for (String a : array) {\n      for (String b : array) {\n        if ("B".equals(b)) {\n          break;\n        }\n        System.out.print(b);\n      }\n    }\n  }\n}',
            choices: [
                "AAと表示される",
                "ABABと表示される",
                "Aと表示される",
                "ABと表示される",
                "BBと表示される",
            ],
            answerIndex: 0,
            explanation:
                '内側ループはb=="B"で直ちにbreakし、"A"のみ出力して外側の次周回へ。結果は「AA」。',
        },
        {
            id: 15,
            category: "制御構造",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル・実行した結果として正しいものを選びなさい。（1つ選択）",
            code: "public class Main {\n  public static void main(String[] args) {\n    int[] array = { 1, 2, 3, 4, 5 };\n    int total = 0;\n    for (int v : array) {\n      if (v % 2 == 0) continue; // 偶数はスキップ\n      total += v;\n    }\n    System.out.println(total);\n  }\n}",
            choices: [
                "1が表示される",
                "9が表示される",
                "15が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation: "奇数(1,3,5)のみ合計するので 1+3+5=9。",
        },
        {
            id: 16,
            category: "制御構造",
            difficulty: "上級",
            question: "次の中から、ラベルが記述できるものを選びなさい。（1つ選択）",
            code: "",
            choices: [
                "if文やswitch文",
                "式",
                "代入",
                "return文",
                "tryブロック",
                "選択肢A～Eすべて",
            ],
            answerIndex: 0,
            explanation:
                "ラベルはループ系文やswitchに付与できる（例：label: for(...)）。式や代入・returnなどには付けられない。",
        },
        {
            id: 17,
            category: "制御構造",
            difficulty: "上級",
            question:
                "次のプログラムをコンパイル・実行した結果として正しいものを選びなさい。（1つ選択）",
            code: "public class Main {\n    public static void main(String[] args) {\n        int total = 0;\n        a: for (int i = 0; i < 5; i++) {\n            b: for (int j = 0; j < 5; j++) {\n                if (i % 2 == 0) continue a;\n                if (3 < j) break b;\n                total += j;\n            }\n        }\n        System.out.println(total);\n    }\n}",
            choices: [
                "6が表示される",
                "12が表示される",
                "20が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation: "処理されるのはi=1,3の2回。各回でj=0+1+2=3を加算し合計6+6=12。",
        },
    ],
};
