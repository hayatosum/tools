const Q_1Z0_815_JPN_05 = {
    prefix: "1Z0-815-JPN",
    part: "05",
    questions: [
        {
            id: 1,
            category: "配列の操作",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int[] array = new int[0];\n 4.         System.out.println(array);\n 5.     }\n 6. }",
            choices: [
                "0が表示される",
                "nullが表示される",
                "何も表示されない",
                "{}が表示される",
                "ハッシュコードが表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 4,
            explanation:
                "このプログラムは、要素数0のint型配列を作成し、その配列をSystem.out.printlnで出力しています。\n\nJavaで配列を直接出力すると、配列のtoString()メソッドが呼ばれます。\n\ntoString()の戻り値は、配列の型情報とハッシュコードを組み合わせた文字列です。\n\nたとえば、[I@xxxxxx のような形式で表示されます。\n（[Iはint型配列、@以降はハッシュコードの16進数表現）\n\n配列の中身や要素数が表示されるわけではありません。\n\nしたがって、画面には配列の型情報とハッシュコードが表示されます。\n\n配列の内容を表示したい場合は、Arrays.toString(array)などを使う必要があります。",
        },
        {
            id: 2,
            category: "配列の操作",
            difficulty: "中級",
            question: "次のプログラムの説明として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int[] a;\n 4.         int b[];\n 5.         int[][] c;\n 6.         int d[][];\n 7.         int[] e[];\n 8.         int[][] f[];\n 9.     }\n10. }",
            choices: [
                "3行目でコンパイルエラーが発生する",
                "4行目でコンパイルエラーが発生する",
                "5行目でコンパイルエラーが発生する",
                "6行目でコンパイルエラーが発生する",
                "4行目と6行目でコンパイルエラーが発生する",
                "7行目と8行目でコンパイルエラーが発生する",
                "コンパイルエラーは発生しない",
            ],
            answerIndex: 6,
            explanation:
                "Javaでは、配列の宣言方法に複数の書き方があります。\n\nint[] a;   // 1次元配列の宣言\nint b[];   // 1次元配列の宣言（[]を変数名の後ろに書くことも可能）\nint[][] c; // 2次元配列の宣言\nint d[][]; // 2次元配列の宣言（[]を変数名の後ろに書くことも可能）\nint[] e[]; // 2次元配列の宣言（[]を型名と変数名の両方に付けてもOK）\nint[][] f[]; // 3次元配列の宣言\n\nこれらはすべて正しい配列の宣言方法であり、どの行でもコンパイルエラーは発生しません。\n\n配列の宣言位置や[]の付け方が異なっても、Javaではすべて有効です。",
        },
        {
            id: 3,
            category: "配列の操作",
            difficulty: "初級",
            question: "配列変数の宣言として、正しいものをすべて選びなさい。",
            code: "",
            choices: [
                "<code>int[3] a;</code>",
                "<code>int b[2];</code>",
                "<code>int[2] c[];</code>",
                "<code>int d[3][];</code>",
                "<code>他の選択肢すべてが誤りである</code>",
            ],
            answerIndex: 4,
            explanation:
                "Javaでは、配列の宣言時にサイズを指定することはできません。\n\nたとえば、int[3] a; や int b[2]; のように、[]内に数字を書く書き方は誤りです。\n\n正しい配列の宣言は、int[] a; や int b[]; のように、型名または変数名の後ろに[]を付けるだけです。\n\nまた、多次元配列でも宣言時にサイズを指定することはできません。\n\nしたがって、選択肢にある宣言はすべて誤りであり、「他の選択肢すべてが誤りである」が正解となります。",
        },
        {
            id: 4,
            category: "配列の操作",
            difficulty: "中級",
            question: "次の中から、コンパイルエラーになるコードを選びなさい。（3つ選択）",
            code: "",
            choices: [
                "<code>int[] a = new int[2][3];</code>",
                "<code>int[] b = new int[2,3];</code>",
                "<code>int c[] = new int[2 * 3];</code>",
                "<code>int x = 2, y = 3; int[] d = new int[x * y];</code>",
                "<code>int[][] e = new int[2][];</code>",
                "<code>int f[][] = new int[][3];</code>",
            ],
            answerIndex: [0, 1, 5],
            explanation:
                "この問題は、配列の生成時の構文やルールに関するものです。\n\nint[] a = new int[2][3];\n→ 右辺は2次元配列の生成式ですが、左辺が1次元配列型なので型が一致せずコンパイルエラーです。\n\nint[] b = new int[2,3];\n→ Javaでは配列のサイズをカンマ区切りで指定する構文はありません。構文エラーとなります。\n\nint c[] = new int[2 * 3];\n→ 2×3=6の1次元配列を生成しており、正しい構文です。\n\nint x = 2, y = 3; int[] d = new int[x * y];\n→ 変数を使って配列のサイズを指定するのは正しい構文です。\n\nint[][] e = new int[2][];\n→ 外側の配列サイズだけを指定し、内側は未指定でもOKです。\n\nint f[][] = new int[][3];\n→ 外側のサイズを省略し、内側だけ指定することはできません。構文エラーです。\n\nまとめると、型不一致や構文エラーとなるものがコンパイルエラーになります。",
        },
        {
            id: 5,
            category: "配列の操作",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Item {\n 2.     String name;\n 3.     int price = 100;\n 4. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Item[] items = new Item[3];\n 4.         int total = 0;\n 5.         for (int i = 0; i < items.length; i++) {\n 6.             total += items[i].price;\n 7.         }\n 8.         System.out.println(total);\n 9.     }\n10. }",
            choices: [
                "0が表示される",
                "200が表示される",
                "300が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 4,
            explanation:
                "このプログラムでは、Item型の配列itemsを3つ分作成していますが、配列の各要素には何も代入していません。\n\nJavaで参照型の配列を生成すると、各要素は自動的にnullで初期化されます。\n\nfor文でitems[i].priceにアクセスしようとしていますが、items[i]はすべてnullのため、nullに対してフィールドへアクセスしようとするとNullPointerExceptionが発生します。\n\nそのため、プログラムを実行すると例外がスローされます。\n\nもし配列の各要素にItemオブジェクトを代入していれば、例外は発生しません。",
        },
        {
            id: 6,
            category: "配列の操作",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String[] array = {"A", "B", "C", "D"};\n 4.         array[0] = null;\n 5.         for (String str : array) {\n 6.             System.out.print(str);\n 7.         }\n 8.     }\n 9. }',
            choices: [
                "「ABCD」と表示される",
                "「BCD」と表示される",
                "「nullBCD」と表示される",
                "「null」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                'このプログラムでは、文字列の配列の最初の要素をnullにしています。\n\nfor-each文で配列の各要素を順に出力していますが、nullの要素を出力しようとすると、文字列"null"として表示されます。\n\nそのため、出力結果は「nullBCD」となります。\n\n配列の要素がnullの場合、System.out.printでそのまま"null"と出力されることに注意しましょう。',
        },
        {
            id: 7,
            category: "配列の操作",
            difficulty: "上級",
            question: "次の中から、コンパイルエラーにならないコードを選びなさい。（3つ選択）",
            code: "",
            choices: [
                "<code>int[] a = new int[2]{ 2, 3 };</code>",
                "<code>int b[][] = {};</code>",
                "<code>int[][] c = new int[][]{};</code>",
                "<code>int[] d; d = new int[]{2,3};</code>",
                "<code>int e[]; e = {2,3};</code>",
            ],
            answerIndex: [2, 3, 4],
            explanation:
                "この問題は、配列の初期化や宣言の構文に関するものです。\n\nint[] a = new int[2]{ 2, 3 };\n→ newと初期化子を同時に使う場合、[]内に要素数を指定するとコンパイルエラーになります。\n\nint b[][] = {};\n→ 多次元配列の宣言と同時に空配列で初期化することはできません。コンパイルエラーです。\n\nint[][] c = new int[][]{};\n→ new int[][]{}のように、要素数を指定せずに初期化子を使うのは正しい構文です。\n\nint[] d; d = new int[]{2,3};\n→ 配列変数の宣言と代入を分けて書く場合、new int[]{...}の形で初期化できます。\n\nint e[]; e = {2,3};\n→ 配列変数の宣言と代入を分けて書く場合、初期化子だけで代入することもできます。\n\nしたがって、正しい構文となるのは、new int[][]{}、new int[]{2,3}、{2,3}で代入するパターンです。",
        },
        {
            id: 8,
            category: "配列の操作",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String[] array = {"A", "B", null, "C", "D", "E"};\n 4.         int total = 0;\n 5.         for (String tmp : array) {\n 6.             total += tmp.length();\n 7.         }\n 8.         System.out.println(total);\n 9.     }\n10. }',
            choices: [
                "0が表示される",
                "5が表示される",
                "9が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 4,
            explanation:
                "このプログラムでは、文字列の配列にnullが含まれています。\n\nfor-each文で配列の各要素に対してlength()メソッドを呼び出していますが、nullの要素に対してlength()を呼び出すと、NullPointerExceptionが発生します。\n\nしたがって、プログラムを実行すると例外がスローされます。\n\n配列のすべての要素がnullでない場合のみ、length()で文字列の長さを正しく取得できます。",
        },
        {
            id: 9,
            category: "配列の操作",
            difficulty: "上級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: " 1. public interface A {}\n\n 1. public abstract class B implements A {}\n\n 1. public class C extends B {}\n\n 1. public class D extends C {}\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         A[] array = { new C(), null, new D() };\n 4.         Object[] objArray = array;\n 5.     }\n 6. }",
            choices: [
                "Mainクラスの3行目でコンパイルエラーが発生する",
                "Mainクラスの4行目でコンパイルエラーが発生する",
                "実行時に例外がスローされる",
                "コンパイルも実行もできる",
            ],
            answerIndex: 3,
            explanation:
                "このプログラムでは、インターフェース型Aの配列を作成し、Object型の配列に代入しています。\n\nJavaでは、インターフェース型やクラス型の配列は、そのままObject[]型に代入することができます。\n\nまた、配列の要素にnullが含まれていても、配列自体の型が合っていれば問題ありません。\n\nしたがって、このプログラムはコンパイルも実行も正常に行われます。",
        },
        {
            id: 10,
            category: "配列の操作",
            difficulty: "上級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int[][] arrayA = { {1,2}, {1,2}, {1,2,3} };\n 4.         int[][] arrayB = arrayA.clone();\n 5.         int total = 0;\n 6.         for (int[] tmp : arrayB) {\n 7.             for (int val : tmp) {\n 8.                 total += val;\n 9.             }\n10.         }\n11.         System.out.println(total);\n12.     }\n13. }",
            choices: [
                "0が表示される",
                "12が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                "このプログラムでは、2次元配列arrayAを初期化し、arrayAをclone()メソッドで複製してarrayBに代入しています。\n\nclone()で複製されるのは外側の配列だけで、内側の配列は同じ参照を持ちます（シャローコピー）。\n\nfor文でarrayBの各要素（int[]型の配列）を取り出し、さらにその中の値を合計しています。\n\narrayAの中身は {1,2}, {1,2}, {1,2,3} なので、合計は1+2+1+2+1+2+3=12 となります。\n\nしたがって、画面には12が表示されます。",
        },
    ],
};
