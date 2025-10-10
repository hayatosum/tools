const JAVA_SILVER_1Z0_815_JPN_12 = {
    prefix: "1Z0-815-JPN",
    part: "12",
    questions: [
        {
            id: 1,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次の2つのコードのクラスファイルを生成するためのコマンドとして、正しいものを選びなさい。（1つ選択）",
            code: "1. package b;\n2. public class B {\n3. }\n\n1. package a;\n2. import b.*;\n3. public class A {\n4.     public static void main(String[] args) {\n5.         B b = new B();\n6.     }\n7. }",
            choices: [
                "<code>java a/A.java</code>",
                "<code>java b/B.java</code>",
                "<code>javac b/B.java\njava a/A.java</code>",
                "<code>javac a/A.java\njava a/A</code>",
            ],
            answerIndex: 3,
            explanation:
                "コンパイル時には依存クラスBを先にコンパイルし、次にAをコンパイル・実行する。したがって「javac a/A.java」「java a/A」が正しい。",
        },
        {
            id: 2,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次の3つのステートメントを記述する順番として正しいものを選びなさい。（1つ選択）",
            code: "",
            choices: [
                "package → import → class",
                "package → class → import",
                "import → class → package",
                "class → package → import",
                "import → package → class",
            ],
            answerIndex: 0,
            explanation:
                "Javaのソースファイルは、最上部にpackage宣言、次にimport宣言、その後にクラスやインタフェースの宣言を書く必要があります。この順序以外ではコンパイルエラーとなります。",
        },
        {
            id: 3,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムを確認し、Mainクラスの空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: " 1. package com.sample;\n 2. public class Sample {\n 3.     public void sample() {\n 4.         // any code\n 5.     }\n 6. }\n\n 1. package com.sample.test;\n 2. public class Test {\n 3.     public void test(int num) {\n 4.         // any code\n 5.     }\n 6. }\n\n 1. package com;\n 2. __________\n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         new Sample().sample();\n 6.         int num = Integer.parseInt(args[0]);\n 7.         new Test().test(num);\n 8.     }\n 9. }",
            choices: [
                "<code>import java.lang.Integer;\nimport com.*;</code>",
                "<code>import com.sample.*;</code>",
                "<code>import com.sample.Sample;\nimport com.sample.test.*;</code>",
                "<code>import java.lang.*;</code>",
            ],
            answerIndex: 2,
            explanation:
                "MainクラスからSampleとTestを使用するためには、両パッケージをインポートする必要がある。",
        },
        {
            id: 4,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: "1. import java.util.function.Supplier;\n2. public class Sample {\n3.     void sample() {\n4.         int i = 0;\n5.         Supplier<Integer> foo = () -> i;\n6.         i++;\n7.         System.out.println(foo.get());\n8.     }\n9. }",
            choices: [
                "コンパイルできるが、何も表示されない",
                "実行時に例外がスローされる",
                "0が表示される",
                "1が表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 4,
            explanation:
                "Javaのラムダ式内で参照するローカル変数は、finalまたは実質final（再代入されない）でなければなりません。i++で再代入しているため、コンパイルエラーとなります。",
        },
        {
            id: 5,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: "1. public class Sample {\n2.     static int num = 23;\n3.     public static void main(String[] args) {\n4.         int num = num;\n5.         System.out.println(num);\n6.     }\n7. }",
            choices: [
                "23が表示される",
                "想定外の結果が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "ローカル変数numが初期化される前に自分自身を参照しているためコンパイルエラー。",
        },
        {
            id: 6,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次の2つのモジュール設定ファイルに関する説明として、正しいものを選びなさい。（2つ選択）",
            code: "1. module A {\n2.     requires B;\n3. }\n\n1. module B {\n2.     requires A;\n3. }",
            choices: [
                "どちらのモジュールも、パッケージがエクスポートされない",
                "どちらのモジュールもjava.baseモジュールを必須としない",
                "モジュールの名前が短すぎる",
                "コンパイルエラーが発生する",
            ],
            answerIndex: [0, 3],
            explanation:
                "Javaのモジュールシステムでは、2つのモジュールが互いにrequiresし合う循環依存は許可されておらず、コンパイルエラーとなります。",
        },
        {
            id: 7,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int data = 1;\n 4.         switch(data) {\n 5.             default: System.out.print("C");\n 6.             case 0: System.out.print("A"); break;\n 7.             case 10: System.out.print("B"); break;\n 8.         }\n 9.     }\n10. }',
            choices: [
                "「A」と表示される",
                "「C」と表示される",
                "「CA」と表示される",
                "「CAB」と表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 2,
            explanation:
                "switch文でdataが1の場合、default節が最初に実行されて「C」が出力される。その後、breakがないためcase 0の処理も続けて実行され、「A」が出力される。したがって、最終的な出力は「CA」となる。",
        },
        {
            id: 8,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: '1. public class Sample {\n2.     public static void main(String[] args) {\n3.         String str = "hoge456test";\n4.         int index = 5;\n5.         if (Character.isAlphabetic(str.charAt(index))) {\n6.             index = 0;\n7.         } else if (Character.isDigit(str.charAt(index))) {\n8.             index = 10;\n9.         } else {\n10.            ++index;\n11.        }\n12.        if (str.endsWith("test")) {\n13.            str = str.substring(0, index);\n14.        }\n15.        System.out.println(str);\n16.    }\n17. }',
            choices: [
                "「hoge」と表示される",
                "「hoge456」と表示される",
                "「456test」と表示される",
                "「hoge456test」と表示される",
                "「hoge456tes」と表示される",
            ],
            answerIndex: 4,
            explanation:
                "index=5の文字は'5'で数字。index=10に更新後substring(0,10)でhoge456tesを出力。",
        },
        {
            id: 9,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "クラスやモジュールの依存関係を調べるために使うコマンドとして、正しいものを選びなさい。（2つ選択）",
            code: "",
            choices: [
                "<code>jmod describe</code>",
                "<code>jdeps --list-deps</code>",
                "<code>java Hello.java</code>",
                "<code>jar --show-module-resolution</code>",
                "<code>java --show-module-resolution</code>",
            ],
            answerIndex: [1, 4],
            explanation:
                "クラスやモジュールの依存関係を調べるには、jdepsコマンドやjavaコマンドの--show-module-resolutionオプションを使います。jdeps --list-depsは、指定したクラスやJARファイルが依存しているパッケージやモジュールを一覧表示します。java --show-module-resolutionは、アプリケーション起動時にモジュールの解決結果（どのモジュールがどれに依存しているか）を表示します。\n" +
                "jmod describeはjmodファイルの情報を表示するコマンドで、依存関係の一覧は出力しません。jar --show-module-resolutionというオプションは存在しません。java Hello.javaはソースファイルを直接実行するだけで依存関係の表示は行いません。",
        },
        {
            id: 10,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムのコンパイルを成功させるための方法として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public interface A {\n 2.     abstract void x();\n 3. }\n\n 1. public abstract class B /* position 1 */ {\n 2.     /* position 2 */\n 3.     public void x() {}\n 4.     public abstract void z();\n 5. }\n\n 1. public class C extends B implements A {\n 2.     /* position 3 */\n 3. }",
            choices: [
                "以下をposition 3に記述する\n<code>@Override\npublic void x() {}</code>",
                "以下をposition 3に記述する\n<code>public void z() {}</code>",
                "以下をposition 2に記述する\n<code>void x(){}</code>",
                "以下をposition 1に記述する\n<code>implements A</code>",
            ],
            answerIndex: 1,
            explanation:
                "Bは抽象メソッドz()を持つ抽象クラス、Cは非抽象クラスなので、Cでz()を実装する必要がある。x()はBですでにpublicで実装済みのため、Cでの再定義は必須ではない。position 1にimplements Aを付けてもCの未実装（z()）は解消しない。",
        },
        {
            id: 11,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムを確認し、変数 value のデータ型として正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String... args) {\n 3.         for (var value : args) {\n 4.             System.out.println(value);\n 5.         }\n 6.     }\n 7. }",
            choices: ["String", "String[]", "Character", "var"],
            answerIndex: 0,
            explanation:
                "拡張for文の右辺はString...（= String[]）なので、繰り返し変数valueは配列要素型のStringになる。",
        },
        {
            id: 12,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String str = "abcd ef gh";\n 4.         int x = str.indexOf("ef");\n 5.         str.substring(x + 3);\n 6.         x = str.indexOf("ef");\n 7.         System.out.println(str + " " + x);\n 8.     }\n 9. }',
            choices: [
                "「ef gh 5」と表示される",
                "「ef gh 4」と表示される",
                "「abcd ef gh 4」と表示される",
                "「abcd ef gh 5」と表示される",
                "実行時に例外がスローされる",
            ],
            answerIndex: 3,
            explanation:
                'indexOf("ef")は3を返すが、substringの戻り値は捨てておりstr自体は不変。次のindexOf(" ")で空白の位置5が得られ、最終出力は元の文字列と5となる。',
        },
        {
            id: 13,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     static String str;\n 3.     public static void main(String[] args) {\n 4.         switch (str) {\n 5.             case "10": str += "10";\n 6.             default: str += "def";\n 7.             case "20": str += "20";\n 8.         }\n 9.         System.out.println(str);\n10.     }\n11. }',
            choices: [
                "「10 def 20」と表示される",
                "「def 20」と表示される",
                "「null」と表示される",
                "実行時に例外がスローされる",
            ],
            answerIndex: 3,
            explanation:
                "switchの式に使用しているstrはnullであり、Stringのswitchでnullを評価すると実行時にNullPointerExceptionが送出される。",
        },
        {
            id: 14,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムを確認し、変数 x のデータ型として正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.Arrays;\n 2. import java.util.List;\n 3. \n 4. public class Sample {\n 5.     public static void main(String[] args) {\n 6.         List<String> list = Arrays.asList(new String[]{"a", "b", "c"});\n 7.         list.forEach(x -> {System.out.println(x);});\n 8.     }\n 9. }',
            choices: ["List<Character>", "String", "char", "List<String>"],
            answerIndex: 1,
            explanation:
                "listはList<String>であり、forEachのラムダパラメータxはコレクションの要素型を受けるためStringとなる。",
        },
        {
            id: 15,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行するためのコマンドとして、正しいものを選びなさい。（1つ選択）",
            code: ' 1. package ex15;\n 2.\n 3. public class Sample {\n 4.     private final String name;\n 5.     public Sample(String name) {\n 6.         this.name = name;\n 7.     }\n 8.     public String getName() {\n 9.         return name;\n10.     }\n11.     public String toString() {\n12.         return name;\n13.     }\n14. }\n\n 1. package ex15;\n 2.\n 3. import java.util.logging.Logger;\n 4.\n 5. public class Main {\n 6.     static final Logger logger = Logger.getAnonymousLogger();\n 7.     public static void main(String[] args) {\n 8.         var d = new Sample("sample");\n 9.         logger.info(d.toString());\n10.     }\n11. }',
            choices: [
                "<code>javac ex15/Sample.java ex15/Main.java\njava -cp build ex15.Main</code>",
                "<code>javac -d build ex15/Sample.java ex15/Main.java\njava -cp build ex15.Main</code>",
                "<code>javac -d build ex15/Sample.java ex15/Main.java\njava ex15.Main</code>",
                "<code>javac -d build ex15/Sample.java ex15/Main.java\njava build.ex15.Main</code>",
            ],
            answerIndex: 1,
            explanation:
                "パッケージ付きクラスを実行するには、-dオプションで出力先を指定し、javaコマンド実行時に-cpでそのパスをクラスパスに追加して完全修飾名で実行する必要がある。",
        },
        {
            id: 16,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行した結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.time.LocalDate;\n 2. import static java.time.DayOfWeek.*;\n 3.\n 4. public class Sample {\n 5.     public static void main(String[] args) {\n 6.         var today = LocalDate.now().with(TUESDAY).getDayOfWeek();\n 7.         switch (today) {\n 8.             case SUNDAY:\n 9.             case SATURDAY:\n10.                 System.out.println("weekend");\n11.                 break;\n12.             case MONDAY:\n13.             case FRIDAY:\n14.                 System.out.println("working");\n15.             default:\n16.                 System.out.println("other");\n17.         }\n18.     }\n19. }',
            choices: [
                "「working」と表示される",
                "「working」「other」と表示される",
                "「Tuesday」と表示される",
                "「other」と表示される",
            ],
            answerIndex: 3,
            explanation:
                "LocalDate#with(TUESDAY)により日付が火曜日に設定され、switchにはTUESDAYのcaseが存在しないため、default節が実行され「other」と出力される。",
        },
        {
            id: 17,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question: "修飾子に関する説明として正しいものを選びなさい。（2つ選択）",
            code: "",
            choices: [
                "ローカル変数は、finalを付けて宣言できる",
                "インタフェースは、protectedを付けて宣言できる",
                "インスタンス変数は、staticを付けて宣言できる",
                "抽象メソッドは、privateを付けて宣言できる",
                "インナークラスは、publicを付けて宣言できる",
            ],
            answerIndex: [0, 4],
            explanation:
                "ローカル変数にはfinalを付けて再代入を防げる。インナークラスはクラススコープ内でpublic修飾も可能。protectedインタフェースやprivate抽象メソッドは不正である。",
        },
        {
            id: 18,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のコマンドを実行した結果、以下のような内容がコンソールに表示された。この内容を表すモジュールグラフとして、正しいものを選びなさい。（1つ選択）",
            code: "> java --describe-module com.sample\n\ncom.sample\nexports com.sql\nexports com.foo\nrequires java.base mandated\nrequires com.logging transitive\nrequires com.xml transitive\nuses java.sql.Driver",
            choices: [
                "![](img/1Z0-815-JPN_12-018_1.png)",
                "![](img/1Z0-815-JPN_12-018_2.png)",
                "![](img/1Z0-815-JPN_12-018_3.png)",
                "![](img/1Z0-815-JPN_12-018_4.png)",
            ],
            answerIndex: 3,
            explanation:
                "requires com.logging / com.xml / com.sql が明示的に依存関係として宣言されているため、モジュールグラフでは com.sample からこれら3つに矢印が伸びる構造となる。",
        },
        {
            id: 19,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムを確認し、これらのクラスを利用する Main クラスをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class A {\n 2.     public void hello() {\n 3.         System.out.println("hello");\n 4.     }\n 5. }\n\n 1. public class B extends A {\n 2.     public void bye() {\n 3.         System.out.println("bye");\n 4.     }\n 5. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         A a = new B();\n 4.         a.bye();\n 5.     }\n 6. }',
            choices: [
                "「bye」と表示される",
                "「null」と表示される",
                "何も表示されない",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 3,
            explanation:
                "A型変数で宣言されているため、Aクラスに存在しないbye()メソッドはコンパイル時に解決できず、コンパイルエラーとなる。",
        },
        {
            id: 20,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     private char a;\n 3.     private int b = 1;\n 4.     String test(char a, int b) {\n 5.         return a + \", \" + b;\n 6.     }\n 7.     public static void main(String[] args) {\n 8.         Sample app = new Sample();\n 9.         System.out.println(app.test('A'));\n10.     }\n11. }",
            choices: [
                "「A, 0」と表示される",
                "「A, 1」と表示される",
                "「A, null」と表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 3,
            explanation:
                'app.test("A") の引数が1つしかないため、定義された test(char,int) に一致せず、コンパイルエラーとなる。',
        },
        {
            id: 21,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "多次元配列のインスタンス化と初期化のコードとして、正しいものを選びなさい。（2つ選択）",
            code: "",
            choices: [
                "<code>int[][] array = {{1,2,3},{4,5,6}};</code>",
                "<code>int[][][] array = {{{1,2},{3,4},{5,6}}};</code>",
                "<code>int[][] array = {0,1};</code>",
                "<code>int[][] array = new int[][2];\narray[0][0] = 1;\narray[0][1] = 2;\narray[1][0] = 3;\narray[1][1] = 4;</code>",
                "<code>int[] array = {0,1};\nint[][][] array2 = new int[2][2][2];\narray2[0][0] = array;\narray2[0][1] = array;\narray2[1][0] = array;\narray2[1][1] = array;</code>",
            ],
            answerIndex: [0, 4],
            explanation:
                "多次元配列の初期化や代入について、Javaでは配列リテラルや既存配列の参照を使った代入が正しく行えます。\n" +
                "たとえば、int[][] array = {{1,2,3},{4,5,6}}; のように、2次元配列をリテラルで初期化する書き方は正しい構文です。\n" +
                "また、int[] array = {0,1}; と1次元配列を作成し、int[][][] array2 = new int[2][2][2]; の各要素に array を代入することも、配列の型や次元が一致していれば問題ありません。\n" +
                "一方で、int[][] array = {0,1}; のように2次元配列に1次元配列リテラルを直接代入したり、int[][] array = new int[][2]; のように配列のサイズ指定が不完全な場合は文法エラーとなります。\n" +
                "配列の初期化や代入では、宣言した型や次元、リテラルや参照の形が一致しているかどうかが重要です。",
        },
        {
            id: 22,
            category: "総仕上げ問題①",
            difficulty: "上級",
            question: "次のプログラムの説明として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class A {\n 2.     int num = 10;\n 3.     public double getValue() {\n 4.         return 0.0;\n 5.     }\n 6. }\n\n 1. public class B extends A {\n 2.     @Override\n 3.     public double getValue() {\n 4.         // ...\n 5.         return 1.0;\n 6.     }\n 7. }\n\n 1. public class C extends B {\n 2.     @Override\n 3.     public double getValue() {\n 4.         System.out.println(super.num);\n 5.         return super.getValue();\n 6.     }\n 7. }",
            choices: [
                "Bクラスのサブクラスでは、getValueメソッドでAクラスのフィールドにアクセスすることができる",
                "Bクラスのサブクラスでは、Bクラスのメソッドを呼び出すためにsuper.getValue()を使えるが、Aクラスのフィールドにはアクセスできない",
                "Bクラスのサブクラスでは、Bクラスのメソッドを呼び出すためにnew.getValue()を使う",
                "Bクラスのサブクラスでは、Bクラスのメソッドを呼び出すためにpublic.getValue()を使う",
            ],
            answerIndex: 0,
            explanation:
                "CクラスはBクラスを継承し、BクラスはAクラスを継承しています。Aクラスのフィールドnumはアクセス修飾子が指定されていないため（デフォルトでpackage-private）、同じパッケージ内であればCクラスからもsuper.numでアクセスできます。" +
                "また、super.getValue()のようにスーパークラスのメソッドも呼び出せます。" +
                "new.getValue()やpublic.getValue()という呼び出し方はJavaの文法として存在しません。",
        },
        {
            id: 23,
            category: "総仕上げ問題①",
            difficulty: "上級",
            question: "次のプログラムの説明として、正しいものを選びなさい。（3つ選択）",
            code: ' 1. import java.util.Collection;\n 2. public class A {\n 3.     public void sample(Collection arg) {\n 4.         System.out.println("A");\n 5.     }\n 6. }\n\n 1. import java.util.List;\n 2. public class B extends A {\n 3.     public void sample(Collection arg) {\n 4.         System.out.println("B");\n 5.     }\n 6.     public void sample(List arg) {\n 7.         System.out.println("C");\n 8.     }\n 9. }\n\n 1. import java.util.*;\n 2. public class Main {\n 3.     public static void main(String[] args) {\n 4.         A a1 = new A();\n 5.         A a2 = new B();\n 6.         B b1 = new B();\n 7.         List<String> list = new ArrayList<>();\n 8.         // do something\n 9.     }\n10. }',
            choices: [
                "a1.sample(list) を実行すると A が表示される",
                "a2.sample(list) を実行すると A が表示される",
                "a2.sample(list) を実行すると B が表示される",
                "b1.sample(list) を実行すると B が表示される",
                "b1.sample(list) を実行すると C が表示される",
            ],
            answerIndex: [0, 2, 4],
            explanation:
                "オーバーロードとオーバーライドの関係：a1は宣言型がAであるためA#sample(Collection)が呼ばれる。a2は宣言型がAであるがB#sample(Collection)でオーバーライドしているためB#sample(Collection)が呼ばれる。b1はB型でList引数が一致するためCが表示される。",
        },
        {
            id: 24,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question: "Dクラスの説明として正しいものを選びなさい。（1つ選択）",
            code: ' 1. public interface A {\n 2.     void sample();\n 3. }\n\n 1. public interface B extends A {\n 2.     default void sample() { System.out.println("B"); }\n 3. }\n\n 1. public interface C extends A {\n 2.     @Override default void sample() { System.out.println("C"); }\n 3. }\n\n 1. public class D implements B, C {\n 2.     @Override public void sample() { super.sample(); }\n 3. }',
            choices: [
                "Bインタフェースのsampleメソッドを実装している",
                "Cインタフェースのsampleメソッドを実装している",
                "Dクラスがsampleメソッドを使わないのであれば、オーバーライドをする必要はない",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 3,
            explanation:
                "複数のdefaultメソッドを継承した場合、どちらを採用するか曖昧になるためDクラスで明示的にオーバーライドしない限りコンパイルエラーとなる。",
        },
        {
            id: 25,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public abstract class A {\n 2.     abstract void sample();\n 3. }\n\n 1. public class B extends A {\n 2.     @Override\n 3.     void sample(int i) {\n 4.         System.out.println(10);\n 5.     }\n 6.     public static void main(String[] args) {\n 7.         A a = new B();\n 8.         a.sample();\n 9.     }\n10. }",
            choices: [
                "0が表示される",
                "10が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "抽象メソッドvoid sample()を正しくオーバーライドしていないため、コンパイルエラーとなる。",
        },
        {
            id: 26,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムを確認し、コンパイルエラーとなるコードを選びなさい。（1つ選択）",
            code: "public abstract class A {}\n\npublic interface B {}\n\npublic class C extends A implements B {}\n\npublic class D extends C {}",
            choices: [
                "<code>List<A> listA = new ArrayList<>();\nlistA.add(new D());</code>",
                "<code>List<B> listB = new ArrayList<>();\nlistB.add(new C());</code>",
                "<code>List<C> listC = new ArrayList<>();\nlistC.add(new D());</code>",
                "<code>List<D> listD = new ArrayList<>();\nlistD.add(new C());</code>",
                "<code>List<A> listE = new ArrayList<>();\nlistE.add(new C());</code>",
            ],
            answerIndex: 3,
            explanation:
                "List<D> に C 型のインスタンスは追加できないため、コンパイルエラーとなる。",
        },
        {
            id: 27,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void test(Integer a, Integer b) {\n 3.         System.out.println("A");\n 4.     }\n 5.     public static void test(double a, double b) {\n 6.         System.out.println("B");\n 7.     }\n 8.     public static void test(float a, float b) {\n 9.         System.out.println("C");\n10.     }\n11.     public static void test(int a, int b) {\n12.         System.out.println("D");\n13.     }\n14.     public static void main(String[] args) {\n15.         test(10, 20);\n16.         test(10.0, 20.0);\n17.     }\n18. }',
            choices: [
                "「D」「C」と表示される",
                "「D」「B」と表示される",
                "「A」「B」と表示される",
                "「A」「C」と表示される",
            ],
            answerIndex: 1,
            explanation:
                "最初の呼び出しではint→test(int,int)、次の呼び出しではdouble→test(double,double)が選ばれる。",
        },
        {
            id: 28,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question: "次のプログラムの説明として、正しいものを選びなさい。（3つ選択）",
            code: " 1. public interface A {\n 2.     public A build(String str);\n 3. }\n\n 1. public class B implements A {\n 2.     public B(String str) {\n 3.         // ...\n 4.     }\n 5.     @Override\n 6.     public B build(String str) {\n 7.         return new B(str);\n 8.     }\n 9. }",
            choices: [
                "Aはfinalにできない",
                "Bはabstractにできない",
                "Bはfinalにできない",
                "AはBのサブタイプである",
                "Aはabstractにできない",
                "BはAのサブタイプである",
            ],
            answerIndex: [0, 1, 5],
            explanation:
                "BはAを実装しておりAのサブタイプである。インターフェースはfinalにできない。",
        },
        {
            id: 29,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question: "JDKをモジュール化する理由の説明として、正しいものを選びなさい。（2つ選択）",
            choices: [
                "アプリケーションモジュールとJDKのモジュールのリンクが容易に構築できる",
                "Java言語を理解することが簡単になる",
                "実装の詳細を簡単に公開しやすくなる",
                "セキュリティとメンテナンス性が向上する",
                "アプリケーションの堅牢性が向上する",
            ],
            answerIndex: [0, 3],
            explanation: "モジュール化により依存関係が明確になり、セキュリティと保守性が高まる。",
        },
        {
            id: 30,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. class A {\n 2.     public A() {\n 3.         System.out.print("A");\n 4.     }\n 5. }\n 1. class B extends A {\n 2.     public B() {\n 3.         System.out.print("B");\n 4.     }\n 5. }\n 1. class C extends B {\n 2.     public C() {\n 3.         System.out.print("C");\n 4.     }\n 5. }\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         new C();\n 4.     }\n 5. }',
            choices: [
                "「CBA」と表示される",
                "「C」と表示される",
                "「ABC」と表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 2,
            explanation:
                "継承関係により、A→B→Cの順でコンストラクタが呼ばれるため「ABC」と表示される。",
        },
        {
            id: 31,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.ArrayList;\n 2. import java.util.Arrays;\n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         var alphabet = new ArrayList<>(\n 6.             Arrays.asList("A", "B", "C", "D", "E")\n 7.         );\n 8.         alphabet.sort((var a, var b) -> -a.compareTo(b));\n 9.         alphabet.forEach(System.out::println);\n10.     }\n11. }',
            choices: [
                "何も表示されない",
                "「A」「B」「C」「D」「E」と表示される",
                "「E」「D」「C」「B」「A」と表示される",
                "「A」「B」と表示される",
            ],
            answerIndex: 2,
            explanation:
                "通常は昇順ソートが行われるが、設問のコードではマイナス演算子がついているため、「EDCBA」と降順でソートが行われる。",
        },
        {
            id: 32,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question: "抽象クラスの定義として、正しいものを選びなさい。（1つ選択）",
            code: "",
            choices: [
                "<code>abstract class Item {\n    public abstract int calcPrice(Item item);\n    public void print(Item item) { /* do something */ }\n}</code>",
                "<code>abstract class Item {\n    public int calcPrice(Item item);\n    public void print(Item item);\n}</code>",
                "<code>abstract class Item {\n    public int calcPrice(Item item);\n    public final void print(Item item) { /* do something */ }\n}</code>",
                "<code>abstract class Item {\n    public abstract int calcPrice(Item item);\n    public abstract void print(Item item);\n}</code>",
            ],
            answerIndex: 0,
            explanation: "抽象メソッドを1つ以上含み、クラスをabstractとして定義しているAが正しい。",
        },
        {
            id: 33,
            category: "総仕上げ問題①",
            difficulty: "上級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.HashMap;\n 2. import java.util.List;\n 3. import java.util.Map;\n 4. public class Main {\n 5.     static Map<String, String> map = new HashMap<>();\n 6.     static List<String> keys = List.of("A", "B", "C");\n 7.     static String[] values = {"1", "2", "3"};\n 8.     static {\n 9.         for (var i = 0; i < keys.size(); i++) {\n10.             map.put(keys.get(i), values[i]);\n11.         }\n12.     }\n13.     public static void main(String[] args) {\n14.         keys.clear();\n15.         values = new String[0];\n16.         System.out.println(map.size() + "," + keys.size() + "," + values.length);\n17.     }\n18. }',
            choices: [
                "「3,3,0」と表示される",
                "「3,0,0」と表示される",
                "「3,3,3」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 4,
            explanation:
                "List.of()で生成されたリストは不変のため、keys.clear()でUnsupportedOperationExceptionがスローされる。",
        },
        {
            id: 34,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         char c = 'b';\n 4.         int i = 0;\n 5.         switch (c) {\n 6.             case 'a':\n 7.                 i++;\n 8.                 break;\n 9.             case 'b':\n10.                 i++;\n11.             case 'c':\n12.             case 'd':\n13.                 i++;\n14.             case 'e':\n15.                 i++;\n16.                 break;\n17.             case 'f':\n18.                 i++;\n19.                 break;\n20.             default:\n21.                 System.out.println(c);\n22.         }\n23.         System.out.println(i);\n24.     }\n }",
            choices: ["3が表示される", "b1が表示される", "1が表示される", "b2が表示される"],
            answerIndex: 0,
            explanation:
                "switch文で変数cが'b'の場合、case 'b'からbreakがないため、そのままcase 'c'、case 'd'、case 'e'の処理も続けて実行される。iはcase 'b'で1増え、case 'd'でさらに1増え、case 'e'でさらに1増えて合計3増加する。したがって、最終的に3が表示される。",
        },
        {
            id: 35,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class A {\n 2.     private void print() {\n 3.         System.out.println("A");\n 4.     }\n 5.     public void a() {\n 6.         print();\n 7.     }\n 8. }\n\n 1. public class B extends A {\n 2.     private void print() {\n 3.         System.out.println("B");\n 4.     }\n 5.     public void b() {\n 6.         print();\n 7.     }\n 8.     public static void main(String... args) {\n 9.         B b = new B();\n10.         b.a();\n11.         b.b();\n12.     }\n13. }',
            choices: [
                "「A」「B」と表示される",
                "「B」「B」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                "privateメソッドはサブクラスからオーバーライドされず、それぞれのクラス内でのみ有効です。AクラスのaメソッドはAクラスのprintメソッドを呼び出し、BクラスのbメソッドはBクラスのprintメソッドを呼び出します。そのため、a()の呼び出しで「A」、b()の呼び出しで「B」と表示されます。",
        },
        {
            id: 36,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question: "次の繰り返し処理のコードと同じ結果となるfor文を選びなさい。（1つ選択）",
            code: "int x = 0;\nwhile (x < 10) {\n    System.out.print(x++);\n}",
            choices: [
                "<code>for (int a = 0; a < 10; ) {\n    System.out.print(a);\n    a++;\n}</code>",
                "<code>int b = 0;\nfor (; b < 10; ) {\n    System.out.print(++b);\n}</code>",
                "<code>int c = 0;\nfor (;;c++) {\n    System.out.print(c);\n}</code>",
                "<code>for (int d = 0; d < 10; d++) {\n    System.out.print(d++);\n}</code>",
            ],
            answerIndex: 0,
            explanation: "後置インクリメントx++の挙動に一致するのは、a++を使用したfor文である。",
        },
        {
            id: 37,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question: "次のうち、メソッドの定義として正しいものを選びなさい。（2つ選択）",
            choices: [
                "<code>public void methodA(int x) {\n    return ++x;\n}</code>",
                '<code>public String methodB() {\n    System.out.println("B");\n}</code>',
                "<code>public boolean methodC(int a) {\n    return a < 0;\n}</code>",
                "<code>public char methodD(String str) {\n    return str;\n}</code>",
                "<code>public void methodE() {\n    return;\n}</code>",
            ],
            answerIndex: [2, 4],
            explanation:
                "boolean型のメソッドは条件式の評価結果（trueまたはfalse）をそのままreturnできるため、条件式を返す定義は正しい。void型のメソッドでは、値を返さずreturn;のみ記述することができる。void型で値を返したり、戻り値型と異なる型をreturnする定義は誤りとなる。",
        },
        {
            id: 38,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. import java.util.List;\n 2. public class Main {\n 3.     public static void main(String[] args) {\n 4.         List<Character> list = List.of();\n 5.         list.add('a');\n 6.         list.add('b');\n 7.         list.add('c');\n 8.         System.out.println(list);\n 9.     }\n10. }",
            choices: [
                "[a, b, c]",
                "[c, b, a]",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 3,
            explanation:
                "List.of()で生成されたリストは不変であり、list.add()でUnsupportedOperationExceptionがスローされる。",
        },
        {
            id: 39,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムを以下に示したコマンドで実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: 'java A "A B" A B\n\n1. public class A {\n2.     public static void main(String[] args) {\n3.         for (String str : args) {\n4.             System.out.print(str);\n5.         }\n6.     }\n7. }',
            choices: [
                "「AA BAB」と表示される",
                "「A BAB」と表示される",
                "「A BA B」と表示される",
                "「A B A B」と表示される",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                'コマンド行引数 "A B", "A", "B" がそのまま順に出力されるため、「ABAB」と表示される。',
        },
        {
            id: 40,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String[] array = {"A", "B", "C", "D"};\n 4.         for (int i = 0; i < array.length; i++) {\n 5.             System.out.print(array[i] + " ");\n 6.             if (array[i].equals("C")) {\n 7.                 continue;\n 8.             }\n 9.             System.out.println("end");\n10.             break;\n11.         }\n12.     }\n13. }',
            choices: [
                "A B C end と表示される",
                "A B C D end と表示される",
                "A end と表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 2,
            explanation:
                '最初のループで array[0] が "A" のため "A end" が出力され、breakで終了する。',
        },
        {
            id: 41,
            category: "総仕上げ問題①",
            difficulty: "上級",
            question:
                "次のプログラムを確認し、Dインタフェースでコンパイルエラーが発生する理由として考えられるものを選びなさい。（1つ選択）",
            code: "1. public interface A {\n2.     public Iterable a();\n3. }\n\n1. import java.util.Collection;\n2. public interface B extends A {\n3.     public Collection a();\n4. }\n\n1. import java.nio.file.Path;\n2. public interface C extends A {\n3.     public Path a();\n4. }\n\n1. public interface D extends B, C {\n2. }",
            choices: [
                "Dインタフェースから2つ以上継承しているため",
                "BインタフェースがAインタフェースとは異なる戻り値型の同名メソッドを定義しているため",
                "BとCのインタフェースから継承したメソッドの戻り値が異なるため",
                "Dインタフェースで継承したメソッドを再定義しなかったため",
            ],
            answerIndex: 2,
            explanation:
                "BとCが同名メソッドa()を持つが戻り値型が不整合のため、Dでコンパイルエラーが発生する。",
        },
        {
            id: 42,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. package ex42.a;\n 2. public class A {\n 3.     public String x = "A";\n 4.     protected A() {}\n 5. }\n\n 1. package ex42.b;\n 2. import ex42.a.A;\n 3. public class B extends A {\n 4.     String x = "B";\n 5.     public B() {\n 6.         super();\n 7.     }\n 8. }\n\n 1. package ex42;\n 2. import ex42.a.A;\n 3. import ex42.b.B;\n 4. public class Main {\n 5.     public static void main(String[] args) {\n 6.         A a = new B();\n 7.         System.out.println(a.x);\n 8.     }\n 9. }',
            choices: [
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
                "Aが表示される",
                "Bが表示される",
            ],
            answerIndex: 2,
            explanation:
                "フィールドxはオーバーライドされないため、型Aの参照ではA.xが出力され「A」となる。",
        },
        {
            id: 43,
            category: "総仕上げ問題①",
            difficulty: "上級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class A {\n 2.     private boolean isValue(int val) {\n 3.         return true;\n 4.     }\n 5. }\n\n 1. public class B extends A {\n 2.     public int test(int num) {\n 3.         if (isValue(num)) {\n 4.             return num;\n 5.         }\n 6.         return 0;\n 7.     }\n 8.     public static void main(String[] args) {\n 9.         B b = new B();\n10.         System.out.println(b.test(10));\n11.     }\n12. }",
            choices: [
                "0が表示される",
                "10が表示される",
                "実行時に例外がスローされる",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 3,
            explanation:
                "AクラスのisValueメソッドはprivateで定義されているため、Bクラスからは呼び出すことができません。Bクラスのtestメソッド内でisValue(num)を呼び出そうとすると、アクセス修飾子の制約によりコンパイルエラーとなります。privateメソッドは定義されたクラス内からのみアクセス可能であり、サブクラスからは継承もアクセスもできません。",
        },
        {
            id: 44,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     String name;\n 3.     int num;\n 4.     public Sample(String name, int num) {\n 5.         this.name = name;\n 6.         this.num = num;\n 7.     }\n 8. }\n\n 1. public class SubSample extends Sample {\n 2.     int price;\n 3.     public SubSample(int price) {\n 4.         this.price = price;\n 5.     }\n 6.     public SubSample(String name, int num, int price) {\n 7.         super(name, num);\n 8.         this(price);\n 9.     }\n10. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         SubSample s1 = new SubSample(100);\n 4.         SubSample s2 = new SubSample("sample", 200, 100);\n 5.         System.out.println(s1.name + ", " + s1.num + ", " + s1.price);\n 6.         System.out.println(s2.name + ", " + s2.num + ", " + s2.price);\n 7.     }\n 8. }',
            choices: [
                "<code>sample 200 100\nsample 200 100</code>",
                "<code>null 0 100\nsample 200 100</code>",
                "SubSampleクラスの3行目だけでコンパイルエラーになる",
                "SubSampleクラスの8行目だけでコンパイルエラーになる",
                "SubSampleクラスの3行目と8行目の両方でコンパイルエラーになる",
            ],
            answerIndex: 4,
            explanation:
                "Javaのコンストラクタでは、super(...)やthis(...)による別コンストラクタ呼び出しは必ず最初の文でなければなりません。\n" +
                "SubSample(String name, int num, int price)の8行目では、super(name, num);の後にthis(price);を呼び出しているため、コンパイルエラーとなります。\n" +
                "また、SubSample(int price)のコンストラクタでは、明示的にスーパークラスのコンストラクタを呼び出していないため、暗黙的にsuper()が呼ばれますが、Sampleクラスには引数なしのコンストラクタが存在しないため、こちらもコンパイルエラーとなります。\n" +
                "したがって、3行目と8行目の両方でコンパイルエラーが発生します。",
        },
        {
            id: 45,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question: "testメソッドのオーバーライドとして正しくないものを選びなさい。（1つ選択）",
            code: " 1. public interface Sample {\n 2.     void test();\n 3. }",
            choices: [
                '<code>public class SampleTest implements Sample {\n    @Override\n    public void test() {\n        System.out.println("test");\n    }\n}</code>',
                '<code>public class SampleTest2 {\n    @Override\n    public void test() {\n        System.out.println("test");\n    }\n}</code>',
                "<code>public abstract class SampleTest3 implements Sample {\n    @Override\n    public abstract void test();\n}</code>",
                '<code>public abstract class SampleTest4 implements Sample {\n    @Override\n    public void test() {\n        System.out.println("test");\n    }\n}</code>',
            ],
            answerIndex: 1,
            explanation:
                "BはSampleを実装していないのに@Overrideを付けているためコンパイルエラー。他は有効（Cは抽象オーバーライド可）。",
        },
        {
            id: 46,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル・実行した結果として正しいものを選びなさい。なお、現在の日付は2019年8月14日とする。（1つ選択）",
            code: " 1. import java.time.LocalDate;\n 2. public class Diary {\n 3.     private LocalDate now = LocalDate.now();\n 4.     public LocalDate getNow() {\n 5.         return this.now;\n 6.     }\n 7. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Diary d = new Diary();\n 4.         System.out.println(d.getNow());\n 5.     }\n 6. }",
            choices: [
                "[2019-08-14] と表示される",
                "[08-14-2019] と表示される",
                "[14-08-2019] と表示される",
                "[08-14] と表示される",
                "[2019-08] と表示される",
            ],
            answerIndex: 0,
            explanation:
                "LocalDate#toString は ISO-8601 形式（YYYY-MM-DD）で出力するため、2019-08-14。",
        },
        {
            id: 47,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次の数式を表したコードとして、正しいものを選びなさい。（1つ選択）\n![](img/1Z0-815-JPN_12-047_q.png)",
            code: "",
            choices: [
                "<code>a = b * c * Math.pow(1 + c, n) / (Math.pow(1 + c, n) - 1);</code>",
                "<code>a = b * c * Math.pow(1 + c, n) / Math.pow(1 + c, n) - 1;</code>",
                "<code>a = b * c + (Math.pow(1 + c, n) / (Math.pow(1 + c, n) - 1));</code>",
                "<code>a = b * Math.pow(1 + c, n) - 1 / (c * Math.pow(1 + c, n));</code>",
            ],
            answerIndex: 0,
            explanation: "べき乗は Math.pow、分母全体に括弧が必要。Aのみ数式どおり。",
        },
        {
            id: 48,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムを以下に示したコマンドで実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: '> java Main a b c\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int i = 1;\n 4.         for (String s : args) {\n 5.             System.out.println((i++) + ") " + s);\n 6.         }\n 7.     }\n 8. }',
            choices: [
                "<code>1) a\n2) b\n3) c</code>",
                "<code>2) a\n3) b\n4) c</code>",
                "<code>1) Main\n2) a\n3) b\n4) c</code>",
                "<code>2) Main\n3) a\n4) b\n5) c</code>",
            ],
            answerIndex: 0,
            explanation:
                "argsは[a,b,c]。ループごとに先頭でiを出力後インクリメントするため1〜3で出力。",
        },
        {
            id: 49,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル・実行した結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     int a;\n 3.     int b;\n 4.     int c;\n 5.     int d;\n 6.     void setA(int a) { a = a; }\n 7.     void setB() { this.b = b; }\n 8.     int setC() { return c; }\n 9.     int setD(int num) { d = num; return d; }\n10.     void setAll(int x) { a = b = this.c = setD(x); }\n11.     @Override public String toString() {\n12.         return "Sample [a=" + a + ", b=" + b + ", c=" + c + ", d=" + d + "]";\n13.     }\n14.     public static void main(String[] args) {\n15.         Sample s = new Sample();\n16.         s.setAll(10);\n17.         System.out.println(s);\n18.     }\n19. }',
            choices: [
                "<code>Sample [a=10, b=10, c=10, d=10]</code>",
                "<code>Sample [a=0, b=10, c=10, d=10]</code>",
                "<code>Sample [a=0, b=0, c=0, d=10]</code>",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                "setD(10)が10を返しd=10に。代入は右から左に評価され、c,b,aが順に10となる。",
        },
        {
            id: 50,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル・実行した結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int num = 0;\n 4.         do {\n 5.             num++;\n 6.             if (num == 1) {\n 7.                 continue;\n 8.             }\n 9.             System.out.println(num);\n10.         } while (num < 1);\n11.     }\n12. }",
            choices: [
                "「0」「1」と表示される",
                "「0」と表示される",
                "「1」と表示される",
                "何も表示されない",
            ],
            answerIndex: 3,
            explanation:
                "num==1でcontinueし、その後条件(num<1)が偽となりループ終了。出力は発生しない。",
        },
        {
            id: 51,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question: "例外処理に関する説明として、正しいものを選びなさい。（2つ選択）",
            code: "",
            choices: [
                "finallyブロックは、tryブロックまたはcatchブラックのすぐ後ろに配置しなければならない",
                "try-with-resourcesのリソースを閉じる前に finallyブロックが実行される",
                "tryブロックは複数のcatchブロックを持つことができる",
                "catchブロックは、一般的な型から特定の型への順に並べなければいけない",
                "tryブロックは、catchブロックとfinallyブロックを持たなければいけない",
            ],
            answerIndex: [0, 2],
            explanation:
                "tryブロックは複数のcatchブロックを持つことができ、catchの順序は上位型（例：Exception）より下位型（例：IOException）を後ろに書く必要があります。finallyブロックはtryまたはcatchの直後に配置します。",
        },
        {
            id: 52,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.Arrays;\n 2. \n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         int[] array1 = {1, 2, 3, 4, 5};\n 6.         int[] array2 = {1, 2, 4, 5, 3};\n 7.         int result1 = Arrays.mismatch(array1, array2);\n 8.         int result2 = Arrays.compare(array1, array2);\n 9.         System.out.println(result1 + ":" + result2);\n10.     }\n11. }',
            choices: [
                "[-1:2] と表示される",
                "[2:3] と表示される",
                "[2:-1] と表示される",
                "[3:0] と表示される",
            ],
            answerIndex: 2,
            explanation:
                "Arrays.mismatchは初めて異なる位置のインデックス（2）を返し、Arrays.compareはarray1が小さい場合-1を返す。したがって出力は「2:-1」。",
        },
        {
            id: 53,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムを実行したときに「2.5」と表示されるようにしたい。空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         byte x = 5, y = 2;\n 4.         // ここにコードを記述\n 5.         System.out.println(a);\n 6.     }\n 7. }",
            choices: [
                "<code>float a = Math.round((float) x / y * 100) / (float) 100;</code>",
                "<code>float a = (float)(Math.round((float) x / y * 100) / 100);</code>",
                "<code>float a = Math.round((int)(x / y), 2);</code>",
                "<code>float a = Math.round((float) x / y, 2);</code>",
            ],
            answerIndex: 0,
            explanation:
                "浮動小数点の除算を行い、100倍→四捨五入→100で割ることで小数第2位までを表示できる。",
        },
        {
            id: 54,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question: "次のプログラムの説明として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public interface Sample {\n 2.     void test();\n 3. }\n\n 1. class SampleImpl implements Sample {\n 2.     @Override\n 3.     public void test() {\n 4.         // do something\n 5.     }\n 6. }\n\n 1. class SubSampleImpl extends SampleImpl {\n 2.     void test(int x) {\n 3.         // do something\n 4.     }\n 5. }",
            choices: [
                "Sampleインタフェースでコンパイルエラーが発生する",
                "SampleImplクラスでコンパイルエラーが発生する",
                "SubSampleImplクラスでコンパイルエラーが発生する",
                "正常にコンパイル、実行できる",
            ],
            answerIndex: 3,
            explanation:
                "SampleImplクラスはSampleインタフェースのtest()メソッドを正しく実装しています。" +
                "SubSampleImplクラスではtest(int x)という引数付きのメソッドを定義していますが、これはオーバーロード（同名で引数違い）であり、オーバーライド（引数・戻り値・修飾子が同じ）ではありません。" +
                "このため、SampleImplのtest()メソッドはそのまま継承され、SubSampleImplでtest(int x)を追加しても問題ありません。" +
                "よって、すべて正常にコンパイル・実行できます。",
        },
        {
            id: 55,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question: "次のステートメントのうち、正しいものを選びなさい。（4つ選択）",
            code: "",
            choices: [
                "<code>int[][] a = {{1,1},{2,2}};</code>",
                "<code>short b = (short)'A';</code>",
                "<code>byte c1 = 10;\nchar c2 = c1;</code>",
                "<code>boolean d = (10 == 10);</code>",
                "<code>float e = 1.99;</code>",
                "<code>int f = 12_34;</code>",
                "<code>String g = 'a';</code>",
            ],
            answerIndex: [0, 1, 3, 5],
            explanation:
                "int[][] a = {{1,1},{2,2}}; は2次元配列のリテラル初期化として正しい構文です。\n" +
                "short b = (short)'A'; はchar型をshort型に明示的にキャストしており、問題ありません。\n" +
                "boolean d = (10 == 10); は比較演算の結果をboolean型に代入しており、正しいです。\n" +
                "int f = 12_34; は数値リテラルの途中にアンダースコアを使うことができるため、正しい構文です。\n" +
                "byte c1 = 10; char c2 = c1; はbyte型からchar型への暗黙的な型変換ができないためコンパイルエラーになります。\n" +
                "float e = 1.99; は小数リテラルがdouble型として扱われるため、float型に代入するには末尾にfを付ける必要があります。\n" +
                "String g = 'a'; はシングルクォートで囲まれた'a'がchar型となり、String型には代入できないためコンパイルエラーです。",
        },
        {
            id: 56,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String[][] array = {\n 4.             { "A", "B" },\n 5.             { "C" },\n 6.             { "D", "E", "F", "G" }\n 7.         };\n 8.         for (int i = 0; i < array.length; i++) {\n 9.             int j = 0;\n10.             while (j < array[i].length) {\n11.                 System.out.println("[" + i + "," + j + "]=" + array[i][j]);\n12.                 j++;\n13.             }\n14.         }\n15.     }\n16. }',
            choices: [
                "[0,0]=A\n[0,1]=B\n[1,0]=C\n[1,1]=D\n[2,0]=E\n[2,1]=F\n[2,2]=G",
                "[0,0]=A\n[0,1]=B\n[1,0]=C\n[2,0]=D\n[2,1]=E\n[2,2]=F\n[2,3]=G",
                "[0,0]=A\n[0,1]=B\n[1,0]=C\n[1,1]=D\n[2,0]=E\n[2,1]=F\n[3,0]=G",
                "[0,0]=A\n[0,1]=B\n[0,2]=C\n[1,0]=D\n[1,1]=E\n[1,2]=F\n[1,3]=G",
            ],
            answerIndex: 1,
            explanation:
                "配列の構造から、出力は[0,0]=A, [0,1]=B, [1,0]=C, [1,1]=D, [2,0]=E, [2,1]=F, [2,2]=Gのようになる。",
        },
        {
            id: 57,
            category: "総仕上げ問題①",
            difficulty: "上級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         try {\n 4.             throw new Exception();\n 5.         } catch (Exception e) {\n 6.             throw new RuntimeException();\n 7.         } catch (RuntimeException e) {\n 8.             System.out.println("A");\n 9.         } finally {\n10.             System.out.println("B");\n11.         }\n12.     }\n13. }',
            choices: [
                "Aが表示される",
                "Bが表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "catchブロックの順序が不正。RuntimeExceptionはExceptionのサブクラスのため、上にcatch(Exception)があると到達不能コードとなりコンパイルエラー。",
        },
        {
            id: 58,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int num = 9;\n 4.         if (num++ < 10)\n 5.             System.out.println(num);\n 6.         else\n 7.             System.out.println("B");\n 8.     }\n 9. }',
            choices: [
                "10が表示される",
                "Bが表示される",
                "9が表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 0,
            explanation: "num=9は10より小さいためif文の条件がtrueとなり、「9」が表示される。",
        },
        {
            id: 59,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int a = 4;\n 4.         int b = 2;\n 5.         System.out.println(a + b = " = (a + b) = " + a + b);\n 6.     }\n 7. }',
            choices: [
                "「6 = (a + b) = 42」と表示される",
                "「6 = (a + b) = 6」と表示される",
                "「42 = (a + b) = 42」と表示される",
                "「42 = (a + b) = 6」と表示される",
            ],
            answerIndex: 0,
            explanation:
                "文字列結合は左から順に処理されるため、「a + b = 6, b + a = 42」と出力される。",
        },
        {
            id: 60,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         short s1 = 10;\n 4.         Integer s2 = 20;\n 5.         Long s3 = (long) s1 + s2;\n 6.         String s4 = (String) (s3 + s2);\n 7.         System.out.println(s4);\n 8.     }\n 9. }",
            choices: [
                "30が表示される",
                "5行目でコンパイルエラーが発生する",
                "6行目でコンパイルエラーが発生する",
                "5行目でClassCastExceptionがスローされる",
                "6行目でClassCastExceptionがスローされる",
            ],
            answerIndex: 2,
            explanation:
                "加算の結果はLong型だが、それをStringにキャストすることはできないため6行目でコンパイルエラー。",
        },
        {
            id: 61,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question: "次のプログラムを実行した結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String s1 = new String("Java");\n 4.         String s2 = "Java";\n 5.         String s3 = s2.intern();\n 6.         System.out.print((s1 == s2) + ", ");\n 7.         System.out.print((s2 == s3) + ", ");\n 8.         System.out.println(s1 == s3);\n 9.     }\n10. }',
            choices: [
                "[false, true, false] と表示される",
                "[true, true, true] と表示される",
                "[true, false, false] と表示される",
                "[true, true, false] と表示される",
                "[false, false, false] と表示される",
            ],
            answerIndex: 0,
            explanation:
                'new String()は別オブジェクトを生成するためs1とs2は異なる。intern()でs3はリテラル"Java"を参照しs2と同じになる。',
        },
        {
            id: 62,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         char[][] arrays = {{'a', 'd'}, {'b', 'e'}, {'c', 'f'}};\n 4.         for (char[] array : arrays) {\n 5.             for (char c : array) {\n 6.                 System.out.print(c);\n 7.             }\n 8.             System.out.print(\" \");\n 9.         }\n10.     }\n11. }",
            choices: [
                "[ad be cf] と表示される",
                "[abc def] と表示される",
                "[a b c d e f] と表示される",
                "[abd ecf] と表示される",
            ],
            answerIndex: 0,
            explanation:
                "配列を二重ループで出力しているため、各文字が順に出力されて「abcdef」となる。",
        },
        {
            id: 63,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int y;\n 4.         int x = 3;\n 5.         if (y > 2) {\n 6.             x = ++y;\n 7.             y = x + 5;\n 8.         } else {\n 9.             y++;\n10.         }\n11.         System.out.println(x + ", " + y);\n12.     }\n13. }',
            choices: [
                "4, 9 と表示される",
                "3, 8 と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "変数yが初期化されていないまま条件式で使用されており、コンパイルエラーとなる。",
        },
        {
            id: 64,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムを以下に示したコマンドで実行した結果として、正しいものを選びなさい。（1つ選択）",
            code: '> java Main 1 2 3\n\n 1. public class Main {\n 2.     public static void main(int[] args) {\n 3.         System.out.println("A");\n 4.     }\n 5.     public static void main(Object[] args) {\n 6.         System.out.println("B");\n 7.     }\n 8.     public static void main(String[] args) {\n 9.         System.out.println("C");\n10.     }\n11. }',
            choices: [
                "Aが表示される",
                "Bが表示される",
                "Cが表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "Javaのエントリーポイントはmain(String[] args)のみであり、実行時にはこのメソッドが呼び出されるため「C」と表示される。",
        },
        {
            id: 65,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class A {\n 2.     protected A() {\n 3.         this(2);\n 4.         System.out.print("1");\n 5.     }\n 6.     protected A(int a) {\n 7.         System.out.print(a);\n 8.     }\n 9. }\n\n 1. public class B extends A {\n 2.     B() {\n 3.         this(4);\n 4.         System.out.print("3");\n 5.     }\n 6.     B(int b) {\n 7.         System.out.print(b);\n 8.     }\n 9. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         B b = new B();\n 4.     }\n 5. }',
            choices: [
                "2143が表示される",
                "1234が表示される",
                "4321が表示される",
                "3421が表示される",
            ],
            answerIndex: 0,
            explanation:
                "呼び出し順はB() → this(4) → B(int) → A() → this(2)の順に動作し、出力は「2143」となる。",
        },
        {
            id: 66,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question: "次のプログラムの空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     public static void print(Integer num) {\n 3.         System.out.println(num);\n 4.     }\n 5. }\n\n 6. import java.util.List;\n 7. public class Main {\n 8.     public static void main(String[] args) {\n 9.         List<Integer> list = List.of(1, 2, 3);\n10.         list.forEach(＿＿＿＿＿＿＿);\n11.     }\n12. }",
            choices: ["new Sample()::print", "Sample.print", "Sample:print", "Sample::print"],
            answerIndex: 3,
            explanation:
                "メソッド参照ではクラス名::メソッド名の形式を用いる。したがって正解はSample::print。",
        },
        {
            id: 67,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "Javaの開発環境のセットアップに関する説明として、正しいものを選びなさい。（1つ選択）",
            code: "",
            choices: [
                "JDKをインストールするときには、特定のオペレーティングシステム用のJava開発環境をセットアップする",
                "Javaの開発環境はデフォルトですべてのOS別に設定されている",
                "Javaの開発環境をセットアップするにはJREが必要である",
                "JDKよりも前にIDE（統合開発環境）をインストールすれば、Javaの開発環境は自動的にセットアップされる",
            ],
            answerIndex: 0,
            explanation:
                "JDKは各OSごとに提供されるため、環境に応じたインストーラを選択してセットアップを行う必要がある。",
        },
        {
            id: 68,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のクラスのコンストラクタのうち、コンパイル可能で、かつ array フィールドに参照をセットできるものを選びなさい。（2つ選択）",
            code: "public class Sample {\n    private String[] array;\n}",
            choices: [
                "<code>public Sample(String[] array) {\n    this.array = array;\n}</code>",
                "<code>public Sample(String... array) {\n    array = array;\n}</code>",
                "<code>public Sample(String str) {\n    this.array = str;\n}</code>",
                "<code>public Sample(String[] array) {\n    array = array;\n}</code>",
                "<code>public Sample(String... array) {\n    this.array = array;\n}</code>",
                "<code>public Sample(Object[] array) {\n    this.array = array;\n}</code>",
            ],
            answerIndex: [0, 4],
            explanation:
                "フィールドに代入するには this.array に String[] を渡す必要がある。A はそのまま代入でき、E は可変長引数が実体として String[] なので代入できる。B と D はパラメータに自己代入しておりフィールドを更新しない。C は String を String[] に代入できず、F は Object[] を String[] に代入できない。",
        },
        {
            id: 69,
            category: "総仕上げ問題①",
            difficulty: "上級",
            question:
                "次のプログラムをコンパイル・実行した結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.List;\n 2. import java.util.ArrayList;\n 3.\n 4. public class Main {\n 5.     public static void main(String[] args) {\n 6.         List<String> list = new ArrayList<>();\n 7.         try {\n 8.             while (true) {\n 9.                 list.add("hello");\n10.             }\n11.         } catch (RuntimeException e) {\n12.             System.out.println("A");\n13.         } catch (Exception e) {\n14.             System.out.println("B");\n15.         }\n16.         System.out.println("C");\n17.     }\n18. }',
            choices: [
                "Aが表示される",
                "Bが表示される",
                "Cが表示される",
                "実行時に例外がスローされる",
                "throws宣言がないためコンパイルエラーが発生する",
            ],
            answerIndex: 3,
            explanation:
                "このプログラムは無限ループでリストに文字列を追加し続けるため、最終的にメモリ不足（OutOfMemoryError）が発生します。\n" +
                "catch節ではRuntimeExceptionとExceptionを捕捉していますが、OutOfMemoryErrorはExceptionのサブクラスではなくErrorのサブクラスなので、これらのcatchでは捕捉できません。\n" +
                "そのため、エラーがスローされてプログラムは異常終了します。",
        },
        {
            id: 70,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "com.example モジュール内にある main メソッドを持つ com.sample.Main クラスをコマンドラインから実行するためのコマンドとして正しいものを選びなさい。（1つ選択）",
            code: "",
            choices: [
                "<code>java -classpath com.example.jar -m com.example/com.sample.Main</code>",
                "<code>java -classpath com.example.jar com.sample.Main</code>",
                "<code>java --module-path mods -m com.example/com.sample.Main</code>",
                "<code>java --module-path mods com.example/com.sample.Main</code>",
            ],
            answerIndex: 2,
            explanation:
                "モジュールとして起動するには --module-path でモジュールパスを指定し、-m モジュール/メインクラス を用いる。",
        },
        {
            id: 71,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムを実行し、「abcd」と表示したい。「// insert code here」に入るコードとして正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         String[][] array = new String[2][2];\n 4.         array[0][0] = "a";\n 5.         array[0][1] = "b";\n 6.         array[1][0] = "c";\n 7.         array[1][1] = "d";\n 8.         // insert code here\n 9.     }\n10. }',
            choices: [
                "<code>for (int i = 1; i < 2; ++i) {\n    for (int j = 1; j < 2; ++j) {\n        System.out.print(array[i][j]);\n    }\n}</code>",
                "<code>for (int i = 0; i < 2; ++i) {\n    for (int j = 0; j < i; ++j) {\n        System.out.print(array[i][j]);\n    }\n}</code>",
                "<code>for (String a : array) {\n    for (String b : array) {\n        System.out.println(b);\n    }\n}</code>",
                "<code>for (int i = 0; i < 2; ) {\n    for (int j = 0; j < 2; ) {\n        System.out.print(array[i][j]);\n        j++;\n    }\n    i++;\n}</code>",
            ],
            answerIndex: 3,
            explanation:
                "2×2 の配列の全要素を先頭から順に出力すればよい。D は i, j をループ本体でインクリメントする形だが、0,0→0,1→1,0→1,1 の順に出力できる。他の選択肢は走査範囲が不足、または型不一致/出力が改行付きで不適切。",
        },
        {
            id: 72,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムを実行して「AXCD」と表示したい。空欄に入るコードとして正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         StringBuilder sb = new StringBuilder("ABCD");\n 4.         __________\n 5.         System.out.println(sb);\n 6.     }\n 7. }',
            choices: [
                '<code>sb.replace(sb.indexOf("B"), sb.indexOf("B"), "X");</code>',
                '<code>sb.replace(sb.indexOf("B"), sb.indexOf("C"), "X");</code>',
                '<code>sb.replace(sb.indexOf("A"), sb.indexOf("B"), "X");</code>',
                '<code>sb.replace(sb.indexOf("A"), sb.indexOf("C"), "X");</code>',
            ],
            answerIndex: 1,
            explanation:
                "StringBuilder#replace は [start, end) を X に置換する。B の範囲は「B」の位置から「C」の位置（排他的）であり、B だけが X に置き換わって「AXCD」になる。A は挿入、C と D は置換範囲が広すぎる。",
        },
        {
            id: 73,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムを実行し、「135」と表示したい。4行目の空欄に入るコードとして正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int[] array = { 1, 2, 3, 4, 5 };\n 4.         for (__________) {\n 5.             System.out.print(array[i]);\n 6.         }\n 7.     }\n 8. }",
            choices: [
                "<code>int i = 0; i <= 4; i++</code>",
                "<code>int i = 0; i < 5; i += 2</code>",
                "<code>int i = 1; i <= 5; i += 1</code>",
                "<code>int i = 1; i < 5; i += 2</code>",
            ],
            answerIndex: 1,
            explanation:
                "要素 0,2,4 を順に出力すれば 1,3,5 となる。よって i を 0 から 2 ずつ増やす。",
        },
        {
            id: 74,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル・実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String[] str = new String[2];\n 4.         int i = 0;\n 5.         for (String s : str) {\n 6.             str[i].concat("e" + i);\n 7.             i++;\n 8.         }\n 9.         for (i = 0; i < str.length; i++) {\n10.             System.out.println(str[i]);\n11.         }\n12.     }\n13. }',
            choices: [
                "<code>e0\ne1</code>",
                "<code>null e0\nnull e1</code>",
                "<code>null\nnull</code>",
                "実行時に例外がスローされる",
            ],
            answerIndex: 3,
            explanation:
                "配列の各要素は初期値 null。最初のループで str[0].concat(...) を呼び出した時点で NullPointerException が発生する。",
        },
        {
            id: 75,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "モジュール a はモジュール b に依存し、他のすべてのモジュールから com.sample パッケージへアクセスできるようにしたい。この要件に合致する module-info.java を選びなさい。（1つ選択）",
            code: "",
            choices: [
                "<code>module a {\n    requires com.sample;\n    exports b;\n}</code>",
                "<code>module a {\n    requires b;\n    exports com.sample;\n}</code>",
                "<code>module a {\n    import com.sample;\n    export b;\n}</code>",
                "<code>module a {\n    import b;\n    export com.sample;\n}</code>",
            ],
            answerIndex: 1,
            explanation:
                "a から b を参照するには requires b。外部に com.sample を公開するには exports com.sample を宣言する。",
        },
        {
            id: 76,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public void test(Object[] array) {\n 3.         System.out.println("A");\n 4.     }\n 5.     public void test(String[] array) {\n 6.         System.out.println("B");\n 7.     }\n 8.     public void test(Object obj) {\n 9.         System.out.println("C");\n10.     }\n11.     public static void main(String[] args) {\n12.         new Main().test(args);\n13.     }\n14. }',
            choices: [
                "Aが表示される",
                "Bが表示される",
                "Cが表示される",
                "実行時に例外がスローされる",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 1,
            explanation:
                "main の引数は String[]。オーバーロード解決は最も適合する test(String[]) が選ばれるため「B」が表示される。",
        },
        {
            id: 77,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル・実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     public void test() {\n 3.         System.out.println("Sample#test()");\n 4.     }\n 5. }\n 6.\n 7. public class SubSample extends Sample {\n 8.     @Override\n 9.     public void test() {\n10.         System.out.println("SubSample#test()");\n11.     }\n12. }\n13.\n14. public class Main {\n15.     public static void main(String[] args) {\n16.         SubSample sub = new SubSample();\n17.         Sample sample = new SubSample();\n18.         sub = sample;\n19.         sub.test();\n20.         sample.test();\n21.     }\n22. }',
            choices: [
                "<code>Sample#test()\nSample#test()</code>",
                "<code>SubSample#test()\nSubSample#test()</code>",
                "<code>SubSample#test()\nSample#test()</code>",
                "実行時に例外がスローされる",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 4,
            explanation:
                "subはSubSample型、sampleはSample型ですが、sub = sample;の代入はSample型（スーパークラス）からSubSample型（サブクラス）への代入となり、これはコンパイルエラーとなります（明示的なキャストが必要）。" +
                "したがって、このプログラムはコンパイルエラーとなります。",
        },
        {
            id: 78,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムを確認し、B クラスの空欄に入るコードとして正しいものを選びなさい。（2つ選択）",
            code: " 1. package ex78.a;\n 2. public abstract class A {\n 3.     protected abstract void test();\n 4. }\n\n 1. package ex78.b;\n 2. import ex78.a.A;\n 3. public class B extends A {\n 4.     // insert code here\n 5. }",
            choices: [
                "<code>public void test() {}</code>",
                "<code>private void test() {}</code>",
                "<code>void test() {}</code>",
                "<code>protected void test() {}</code>",
            ],
            answerIndex: [0, 3],
            explanation:
                "A の抽象メソッドは protected。サブクラス（かつ別パッケージ）でのオーバーライドは同じく protected 以上（public も可）でなければならない。",
        },
        {
            id: 79,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question: "モジュールに関する説明として、正しいものを選びなさい。（2つ選択）",
            code: "",
            choices: [
                "コマンドラインからモジュールのエクスポートを設定することはできるが望ましくない",
                "Java の基本 API は java.base モジュールにある",
                "JDK がモジュール化されたため、API は非推奨になった",
                "モジュール式JDKで実行するには、アプリケーションをモジュールとして構造化する必要がある",
            ],
            answerIndex: [0, 1],
            explanation:
                "基本 API は java.base に含まれる。--module-path / -m でモジュール形式で実行するにはモジュールとして構成する必要がある。A は誤り（--add-exports などで可能）、C も誤り。",
        },
        {
            id: 80,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル・実行した結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Test {\n 2.     public static void main(String[] args) {\n 3.         String[][] array = new String[2][];\n 4.         array[0] = new String[2];\n 5.         array[1] = new String[5];\n 6.         int i = 97;\n 7.         for (int a = 0; a < array.length; a++) {\n 8.             for (int b = 0; b < array.length; b++) {\n 9.                 array[a][b] = "" + i;\n10.                 i++;\n11.             }\n12.         }\n13.         for (String[] tmp : array) {\n14.             for (String s : tmp) {\n15.                 System.out.print(s + " ");\n16.             }\n17.             System.out.println();\n18.         }\n19.     }\n20. }',
            choices: [
                "<code>97 98\n99 100 null null null</code>",
                "<code>97 98\n99 100 101 102 103</code>",
                "コンパイルエラーが発生する",
                "実行時にNullPointerExceptionがスローされる",
                "実行時にArrayIndexOutOfBoundsExceptionがスローされる",
            ],
            answerIndex: 0,
            explanation:
                "内側のループ条件が b < array.length になっており、行ごとの長さではなく外側配列の長さ（2）で回している。a=0 のとき b=0,1 は妥当だが b=2 に達して array[0][2] へアクセスしようとして ArrayIndexOutOfBoundsException が発生する。",
        },
    ],
};
