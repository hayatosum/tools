const JAVA_SILVER_1Z0_815_JPN_12 = {
    prefix: "1Z0-815-JPN_12",
    questions: [
        {
            id: 1,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次の2つのコードのクラスファイルを生成するためのコマンドとして、正しいものを選びなさい。（1つ選択）",
            code: "1. package b;\n2. public class B {\n3. }\n\n1. package a;\n2. import b.*;\n3. public class A {\n4.     public static void main(String[] args) {\n5.         B b = new B();\n6.     }\n7. }",
            choices: [
                "<pre><code>java a/A.java</code></pre>",
                "<pre><code>java b/B.java</code></pre>",
                "<pre><code>javac b/B.java\njava a/A</code></pre>",
                "<pre><code>javac a/A.java\njava a/A</code></pre>",
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
                "Javaソースの構造は常に「package → import → class」の順で記述する必要がある。",
        },
        {
            id: 3,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムを確認し、Mainクラスの空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: "1. package com.sample;\n2. public class Sample {\n3.     public void sample() {}\n4. }\n\n1. package com.sample.test;\n2. public class Test {\n3.     public void test(int num) {}\n4. }\n\n1. package com;\n2. _____\n3. public class Main {\n4.     public static void main(String[] args) {\n5.         new Sample().sample();\n6.         int num = Integer.parseInt(args[0]);\n7.         new Test().test(num);\n8.     }\n9. }",
            choices: [
                "<pre><code>import java.lang.Integer;\nimport com.*;</code></pre>",
                "<pre><code>import com.sample.*;</code></pre>",
                "<pre><code>import com.sample.Sample;\nimport com.sample.test.*;</code></pre>",
                "<pre><code>import java.lang.*;</code></pre>",
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
                "ラムダ式で参照する変数はfinalまたは実質finalである必要があるため、i++によりコンパイルエラー。",
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
            answerIndex: 3,
            explanation: "循環依存（AがBを、BがAをrequire）は許可されず、コンパイルエラーとなる。",
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
                "default節は最初に実行されるがbreakがないためcase0も続けて実行され「CA」となる。",
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
                "次のプログラムをコンパイル・実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: '1. interface A {\n2.     default void hello() { System.out.println("A"); }\n3. }\n4. interface B {\n5.     default void hello() { System.out.println("B"); }\n6. }\n7. class C implements A, B {\n8.     public void hello() { A.super.hello(); }\n9. }\n10. public class Main {\n11.     public static void main(String[] args) {\n12.         new C().hello();\n13.     }\n14. }',
            choices: [
                "Aが表示される",
                "Bが表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                '複数のdefaultメソッドが競合した場合、実装クラスで明示的にどちらを呼ぶか指定する必要がある。CではA.super.hello()が呼ばれ、"A"が出力される。',
        },
        {
            id: 10,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル・実行した結果として、正しいものを選びなさい。（1つ選択）",
            code: "1. public class Main {\n2.     public static void main(String[] args) {\n3.         int[] data = {1, 2, 3, 4, 5};\n4.         int total = 0;\n5.         for (int d : data) {\n6.             if (d % 2 == 0) continue;\n7.             total += d;\n8.         }\n9.         System.out.println(total);\n10.    }\n11. }",
            choices: [
                "6が表示される",
                "8が表示される",
                "9が表示される",
                "15が表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 2,
            explanation: "奇数のみを加算するため、1+3+5=9となる。",
        },
        {
            id: 11,
            category: "総仕上げ問題①",
            difficulty: "上級",
            question:
                "次のプログラムをコンパイル・実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: "1. public class Main {\n2.     public static void main(String[] args) {\n3.         int i = 0;\n4.         for (; i < 5; ) {\n5.             i++;\n6.             if (i == 3) break;\n7.         }\n8.         System.out.println(i);\n9.     }\n10. }",
            choices: ["2が表示される", "3が表示される", "4が表示される", "5が表示される"],
            answerIndex: 1,
            explanation: "i++ により3になった時点でbreakし、ループ終了後に3が表示される。",
        },
        {
            id: 12,
            category: "総仕上げ問題①",
            difficulty: "上級",
            question: "次のコードを実行した結果として正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int total = 0;\n 4.         a: for (int i = 0; i < 3; i++) {\n 5.             for (int j = 0; j < 3; j++) {\n 6.                 if (j == 1) continue a;\n 7.                 total += j;\n 8.             }\n 9.         }\n10.        System.out.println(total);\n11.    }\n12. }",
            choices: [
                "0が表示される",
                "3が表示される",
                "6が表示される",
                "9が表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 1,
            explanation: "i=0,1,2の各ループでj=0のみ加算されるため total=3。",
        },
        {
            id: 13,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question: "次のプログラムを実行した結果として正しいものを選びなさい。（1つ選択）",
            code: '1. import java.util.*;\n2. public class Main {\n3.     public static void main(String[] args) {\n4.         List<String> list = Arrays.asList("A", "B", "C");\n5.         for (String s : list) {\n6.             if (s.equals("B")) continue;\n7.             System.out.print(s);\n8.         }\n9.     }\n10. }',
            choices: [
                "Aと表示される",
                "ACと表示される",
                "ABCと表示される",
                "Cと表示される",
                "Bと表示される",
            ],
            answerIndex: 1,
            explanation: "要素Bのときcontinueによりスキップされ、AとCが表示される。",
        },
        {
            id: 14,
            category: "総仕上げ問題①",
            difficulty: "上級",
            question: "次のプログラムを実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: "1. public class Main {\n2.     public static void main(String[] args) {\n3.         int total = 0;\n4.         a: for (int i = 0; i < 5; i++) {\n5.             b: for (int j = 0; j < 5; j++) {\n6.                 if (i % 2 == 0) continue a;\n7.                 if (j == 3) break b;\n8.                 total += j;\n9.             }\n10.        }\n11.        System.out.println(total);\n12.    }\n13. }",
            choices: [
                "6が表示される",
                "12が表示される",
                "20が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation: "i=1,3のときのみ内側ループが動作し、各回でj=0+1+2=3を加算。合計6+6=12。",
        },
        {
            id: 15,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行するためのコマンドとして、正しいものを選びなさい。（1つ選択）",
            code: ' 1. package ex15;\n 2.\n 3. public class Sample {\n 4.     private final String name;\n 5.     public Sample(String name) {\n 6.         this.name = name;\n 7.     }\n 8.     public String getName() {\n 9.         return name;\n10.     }\n11.     public String toString() {\n12.         return name;\n13.     }\n14. }\n\n 1. package ex15;\n 2.\n 3. import java.util.logging.Logger;\n 4.\n 5. public class Main {\n 6.     static final Logger logger = Logger.getAnonymousLogger();\n 7.     public static void main(String[] args) {\n 8.         var d = new Sample("sample");\n 9.         logger.info(d.toString());\n10.     }\n11. }',
            choices: [
                "<pre><code>javac ex15/Sample.java ex15/Main.java\njava -cp build ex15.Main</code></pre>",
                "<pre><code>javac -d build ex15/Sample.java ex15/Main.java\njava -cp build ex15.Main</code></pre>",
                "<pre><code>javac -d build ex15/Sample.java ex15/Main.java\njava ex15.Main</code></pre>",
                "<pre><code>javac -d build ex15/Sample.java ex15/Main.java\njava build.ex15.Main</code></pre>",
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
            code: ' 1. import java.time.LocalDate;\n 2. import static java.time.DayOfWeek.*;\n 3.\n 4. public class Sample {\n 5.     public static void main(String[] args) {\n 6.         var today = LocalDate.now().with(TUESDAY).getDayOfWeek();\n 7.         switch (today) {\n 8.             case SUNDAY:\n 9.             case SATURDAY:\n10.                 System.out.println("weekend");\n11.                 break;\n12.             case MONDAY:\n13.             case FRIDAY:\n14.                 System.out.println("working");\n15.                 break;\n16.             default:\n17.                 System.out.println("other");\n18.         }\n19.     }\n20. }',
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
            code: "> java --describe-module com.sample\n\ncom.sample\nexports com.sql\nexports com.foo\nrequires java.base mandated\nrequires com.logging transitive\nrequires com.xml transitive\nrequires com.sql transitive\nuses java.sql.Driver",
            choices: [
                "A. com.sample が com.logging, com.xml, java.base に依存する",
                "B. com.sample が java.sql.Driver と java.base に依存する",
                "C. com.sample が com.sql, com.foo, java.base に依存する",
                "D. com.sample が com.logging, com.xml, com.sql に依存する",
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
            code: ' 1. public class Sample {\n 2.     private char a;\n 3.     private int b = 1;\n 4.     String test(char a, int b) {\n 5.         return a + ", " + b;\n 6.     }\n 7.     public static void main(String[] args) {\n 8.         Sample app = new Sample();\n 9.         System.out.println(app.test("A"));\n10.     }\n11. }',
            choices: [
                "「A,0」と表示される",
                "「A,1」と表示される",
                "「A,null」と表示される",
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
                "int[][] array = {{1,2,3},{4,5,6}};",
                "int[][][] array = {{{1,2},{3,4},{5,6}}};",
                "int[][] array = {0,1};",
                "int[][] array = new int[1][2]; array[0][0]=1; array[0][1]=2;",
                "int[][][] array2 = new int[2][2][2];",
            ],
            answerIndex: [0, 3],
            explanation:
                "2次元配列では波括弧で初期化リテラルを使用できるほか、new文で配列サイズを指定してから要素に代入することも正しい構文。",
        },
        {
            id: 22,
            category: "総仕上げ問題①",
            difficulty: "上級",
            question: "次のプログラムの説明として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class A {\n 2.     int num = 10;\n 3.     public double getValue() { return 0.0; }\n 4. }\n\n 1. public class B extends A {\n 2.     @Override\n 3.     public double getValue() { return 1.0; }\n 4. }\n\n 1. public class C extends B {\n 2.     @Override\n 3.     public double getValue() {\n 4.         System.out.println(super.num);\n 5.         return super.getValue();\n 6.     }\n 7. }",
            choices: [
                "Bクラスのサブクラスでは、getValueメソッドでAクラスのフィールドにアクセスすることができる",
                "Bクラスのサブクラスでは、super.getValue()を使えるがAクラスのフィールドにはアクセスできない",
                "Bクラスのサブクラスでは、new.getValue()を使う必要がある",
                "Bクラスのサブクラスでは、public.getValue()を使う必要がある",
            ],
            answerIndex: 0,
            explanation:
                "CはAを間接継承しているため、super.numでAクラスのフィールドへアクセス可能。メソッド呼び出しもsuper.getValue()で問題ない。",
        },
        {
            id: 23,
            category: "総仕上げ問題①",
            difficulty: "上級",
            question: "次のプログラムの説明として、正しいものを選びなさい。（3つ選択）",
            code: ' 1. import java.util.Collection;\n 2. public class A {\n 3.     public void sample(Collection arg) {\n 4.         System.out.println("A");\n 5.     }\n 6. }\n\n 1. import java.util.List;\n 2. public class B extends A {\n 3.     public void sample(Collection arg) {\n 4.         System.out.println("B");\n 5.     }\n 6.     public void sample(List arg) {\n 7.         System.out.println("C");\n 8.     }\n 9. }\n\n 1. import java.util.*;\n 2. public class Main {\n 3.     public static void main(String[] args) {\n 4.         A a1 = new A();\n 5.         A a2 = new B();\n 6.         B b1 = new B();\n 7.         List<String> list = new ArrayList<>();\n 8.     }\n 9. }',
            choices: [
                "a1.sample(list) を実行すると A が表示される",
                "a2.sample(list) を実行すると A が表示される",
                "a2.sample(list) を実行すると B が表示される",
                "b1.sample(list) を実行すると B が表示される",
                "b1.sample(list) を実行すると C が表示される",
            ],
            answerIndex: [0, 1, 4],
            explanation:
                "オーバーロードとオーバーライドの関係：a1とa2は宣言型がAであるためA#sample(Collection)が呼ばれる。b1はB型でList引数が一致するためCが表示される。",
        },
        {
            id: 24,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question: "Dクラスの説明として正しいものを選びなさい。（1つ選択）",
            code: ' 1. public interface A { void sample(); }\n 2. public interface B extends A {\n 3.     default void sample() { System.out.println("B"); }\n 4. }\n 5. public interface C extends A {\n 6.     @Override default void sample() { System.out.println("C"); }\n 7. }\n 8. public class D implements B, C {\n 9.     @Override public void sample() { super.sample(); }\n10. }',
            choices: [
                "Bインタフェースのsampleメソッドを実装している",
                "Cインタフェースのsampleメソッドを実装している",
                "Dクラスがsampleメソッドを使わないのであればオーバーライドは不要",
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
            code: "public abstract class A {}\n\npublic interface B {}\n\npublic class C extends A implements B {}\n\npublic class D extends C {}\n\n<pre><code>List<A> listA = new ArrayList<>();\nlistA.add(new D());</code></pre>",
            choices: [
                "<pre><code>List<A> listA = new ArrayList<>();\nlistA.add(new D());</code></pre>",
                "<pre><code>List<B> listB = new ArrayList<>();\nlistB.add(new C());</code></pre>",
                "<pre><code>List<C> listC = new ArrayList<>();\nlistC.add(new D());</code></pre>",
                "<pre><code>List<D> listD = new ArrayList<>();\nlistD.add(new C());</code></pre>",
                "<pre><code>List<A> listE = new ArrayList<>();\nlistE.add(new D());</code></pre>",
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
                "「D」「C」と表示される",
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
            answerIndex: 5,
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
            answerIndex: 3,
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
            code: ' 1. import java.util.ArrayList;\n 2. import java.util.Arrays;\n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         var alphabet = new ArrayList<>(\n 6.             Arrays.asList("A", "B", "C", "D", "E")\n 7.         );\n 8.         alphabet.sort((a, b) -> a.compareTo(b));\n 9.         alphabet.forEach(System.out::print);\n10.     }\n11. }',
            choices: [
                "何も表示されない",
                "「A」「B」「C」「D」「E」と表示される",
                "「E」「D」「C」「B」「A」と表示される",
                "「A」「B」と表示される",
            ],
            answerIndex: 1,
            explanation: "昇順ソートが行われるため、「ABCDE」と順に出力される。",
        },
        {
            id: 32,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question: "抽象クラスの定義として、正しいものを選びなさい。（1つ選択）",
            code: "",
            choices: [
                "<pre><code>abstract class Item {\n    public abstract int calcPrice(Item item);\n    public void print(Item item) { /* do something */ }\n}</code></pre>",
                "<pre><code>abstract class Item {\n    public int calcPrice(Item item);\n    public void print(Item item);\n}</code></pre>",
                "<pre><code>abstract class Item {\n    public int calcPrice(Item item);\n    public final void print(Item item) { /* do something */ }\n}</code></pre>",
                "<pre><code>abstract class Item {\n    public abstract int calcPrice(Item item);\n    public abstract void print(Item item);\n}</code></pre>",
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
                "「3,0,0」と表示される",
                "「3,0」と表示される",
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
                "case 'b' でbreakがないため、b→c→d→eまで実行され、iは3増加して「3」が表示される。",
        },
        {
            id: 35,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class A {\n 2.     private void print() {\n 3.         System.out.println("A");\n 4.     }\n 5.     public void a() {\n 6.         print();\n 7.     }\n 8. }\n 1. public class B extends A {\n 2.     private void print() {\n 3.         System.out.println("B");\n 4.     }\n 5.     public void b() {\n 6.         print();\n 7.     }\n 8.     public static void main(String... args) {\n 9.         B b = new B();\n10.         b.a();\n11.         b.b();\n12.     }\n13. }',
            choices: [
                "「A」「B」と表示される",
                "「B」「B」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                "privateメソッドはオーバーライドされず、a()はAのprint()を、b()はBのprint()を呼び出す。",
        },
        {
            id: 36,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question: "次の繰り返し処理のコードと同じ結果となるfor文を選びなさい。（1つ選択）",
            code: "int x = 0;\nwhile (x < 10) {\n    System.out.print(x++);\n}",
            choices: [
                "<pre><code>for (int a = 0; a < 10; ) {\n    System.out.print(a++);\n}</code></pre>",
                "<pre><code>int b = 0;\nfor (; b < 10; ) {\n    System.out.print(++b);\n}</code></pre>",
                "<pre><code>int c = 0;\nfor (;;c++) {\n    System.out.print(c);\n}</code></pre>",
                "<pre><code>for (int d = 0; d < 10; d++) {\n    System.out.print(d++);\n}</code></pre>",
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
                "<pre><code>public void methodA(int x) {\n    return ++x;\n}</code></pre>",
                '<pre><code>public void methodB() {\n    System.out.println("B");\n}</code></pre>',
                "<pre><code>public boolean methodC(int a) {\n    return a < 0;\n}</code></pre>",
                "<pre><code>public char methodD(String str) {\n    return str;\n}</code></pre>",
                "<pre><code>public void methodE() {\n    return;\n}</code></pre>",
            ],
            answerIndex: 2,
            explanation: "戻り値型とreturn文の整合が取れているのはmethodB()とmethodC()である。",
        },
        {
            id: 38,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. import java.util.List;\n 2. public class Main {\n 3.     public static void main(String[] args) {\n 4.         List<Character> list = List.of('a', 'b', 'c');\n 5.         list.add('d');\n 6.         System.out.println(list);\n 7.     }\n 8. }",
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
            code: "1. public class A {\n2.   public static void main(String[] args) {\n3.     for (String str : args) {\n4.       System.out.print(str);\n5.     }\n6.   }\n7. }",
            choices: [
                "AA BAB と表示される",
                "FA BABJ と表示される",
                "FA BABJ と表示される",
                "A B A B と表示される",
                "実行時に例外がスローされる",
            ],
            answerIndex: 3,
            explanation:
                'コマンド行引数 "A", "B", "A", "B" がそのまま順に出力されるため、「ABAB」と表示される。',
        },
        {
            id: 40,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: '1. public class Main {\n2.   public static void main(String[] args) {\n3.     String[] array = {"A", "B", "C", "D"};\n4.     for (int i = 0; i < array.length; i++) {\n5.       System.out.print(array[i] + " ");\n6.       if (array[i].equals("C")) {\n7.         continue;\n8.       }\n9.       System.out.println("end");\n10.      break;\n11.     }\n12.   }\n13. }',
            choices: [
                "A end と表示される",
                "A B end と表示される",
                "A B C D end と表示される",
                "A end C D と表示される",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                '最初のループで array[0] が "A" のため "A end" が出力され、breakで終了する。',
        },
        {
            id: 41,
            category: "総仕上げ問題①",
            difficulty: "上級",
            question:
                "次のプログラムを確認し、ロインタフェースでコンパイルエラーが発生する理由として考えられるものを選びなさい。（1つ選択）",
            code: "1. public interface A {\n2.   public Iterable a();\n3. }\n\n1. import java.util.Collection;\n2. public interface B extends A {\n3.   public Collection a();\n4. }\n\n1. import java.nio.file.Path;\n2. public interface C extends A {\n3.   public Path a();\n4. }\n\n1. public interface D extends B, C {\n2. }\n3. }",
            choices: [
                "Dインタフェースから2つ以上継承しているため",
                "BインタフェースおよびCインタフェースで戻り値型が異なる同名メソッドを定義しているため",
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
            code: '1. package ex42.a;\n2. public class A {\n3.   public String x = "A";\n4.   protected A() {}\n5. }\n\n1. package ex42.b;\n2. import ex42.a.A;\n3. public class B extends A {\n4.   String x = "B";\n5.   public B() {\n6.     super();\n7.   }\n8. }\n\n1. package ex42;\n2. import ex42.a.A;\n3. import ex42.b.B;\n4. public class Main {\n5.   public static void main(String[] args) {\n6.     A a = new B();\n7.     System.out.println(a.x);\n8.   }\n9. }',
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
            code: "1. public class A {\n2.   private boolean isValue(int val) {\n3.     return true;\n4.   }\n5. }\n\n1. public class B extends A {\n2.   public int test(int num) {\n3.     if (isValue(num)) {\n4.       return num;\n5.     }\n6.     return 0;\n7.   }\n8.   public static void main(String[] args) {\n9.     B b = new B();\n10.    System.out.println(b.test(10));\n11.  }\n12. }",
            choices: [
                "0が表示される",
                "10が表示される",
                "実行時に例外がスローされる",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 3,
            explanation: "AのisValueはprivateでBからアクセス不可のためコンパイルエラーとなる。",
        },
        {
            id: 44,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.   String name;\n 3.   int num;\n 4.   public Sample(String name, int num) {\n 5.     this.name = name;\n 6.     this.num = num;\n 7.   }\n 8. }\n\n 1. public class SubSample extends Sample {\n 2.   int price;\n 3.   public SubSample(int price) {\n 4.     this.price = price;\n 5.   }\n 6.   public SubSample(String name, int num, int price) {\n 7.     super(name, num);\n 8.     this(price);\n 9.   }\n10. }\n\n 1. public class Main {\n 2.   public static void main(String[] args) {\n 3.     SubSample s1 = new SubSample(100);\n 4.     SubSample s2 = new SubSample("sample", 200, 100);\n 5.     System.out.println(s1.name + ", " + s1.num + ", " + s1.price);\n 6.     System.out.println(s2.name + ", " + s2.num);\n 7.   }\n 8. }',
            choices: [
                "sample 200 100",
                "null 0 100",
                "SubSampleクラスの3行目だけでコンパイルエラーになる",
                "SubSampleクラスの8行目だけでコンパイルエラーになる",
                "SubSampleクラスの3行目と8行目の両方でコンパイルエラーになる",
            ],
            answerIndex: 3,
            explanation:
                "コンストラクタ内の別コンストラクタ呼び出し（this(...)）は最初の文でなければならない。super(...) の後に this(price) を置いているため8行目でコンパイルエラー。",
        },
        {
            id: 45,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question: "testメソッドのオーバーライドとして正しくないものを選びなさい。（1つ選択）",
            code: " 1. public interface Sample {\n 2.   void test();\n 3. }",
            choices: [
                '<pre><code>public class SampleTest implements Sample {\n  @Override public void test() { System.out.println("test"); }\n}</code></pre>',
                '<pre><code>public class SampleTest2 {\n  @Override public void test() { System.out.println("test"); }\n}</code></pre>',
                "<pre><code>public abstract class SampleTest3 implements Sample {\n  @Override public abstract void test();\n}</code></pre>",
                '<pre><code>public abstract class SampleTest4 implements Sample {\n  @Override public void test() { System.out.println("test"); }\n}</code></pre>',
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
            code: " 1. import java.time.LocalDate;\n 2. public class Diary {\n 3.   private LocalDate now = LocalDate.now();\n 4.   public LocalDate getNow() {\n 5.     return this.now;\n 6.   }\n 7. }\n\n 1. public class Main {\n 2.   public static void main(String[] args) {\n 3.     Diary d = new Diary();\n 4.     System.out.println(d.getNow());\n 5.   }\n 6. }",
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
                "次の数式を表したコードとして、正しいものを選びなさい。（1つ選択）\n a = b * c * (1 + c)^n / ((1 + c)^n - 1)",
            code: "",
            choices: [
                "<pre><code>a = b * c * Math.pow(1 + c, n) / (Math.pow(1 + c, n) - 1);</code></pre>",
                "<pre><code>a = b * c * Math.pow(1 + c, n) / Math.pow(1 + c, n) - 1;</code></pre>",
                "<pre><code>a = b * c + (Math.pow(1 + c, n) / (Math.pow(1 + c, n) - 1));</code></pre>",
                "<pre><code>a = b * Math.pow(1 + c, n) - 1 / (c * Math.pow(1 + c, n));</code></pre>",
            ],
            answerIndex: 0,
            explanation: "べき乗は Math.pow、分母全体に括弧が必要。Aのみ数式どおり。",
        },
        {
            id: 48,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムを以下に示したコマンドで実行したときの結果として、正しいものを選びなさい。（1つ選択）\n> java Main a b c",
            code: ' 1. public class Main {\n 2.   public static void main(String[] args) {\n 3.     int i = 1;\n 4.     for (String s : args) {\n 5.       System.out.println((i++) + ") " + s);\n 6.     }\n 7.   }\n 8. }',
            choices: [
                "1) a\\n2) b\\n3) c",
                "2) a\\n3) b\\n4) c",
                "1) Main\\n2) a\\n3) b\\n4) c",
                "2) Main\\n3) a\\n4) b\\n5) c",
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
            code: ' 1. public class Sample {\n 2.   int a;\n 3.   int b;\n 4.   int c;\n 5.   int d;\n 6.   void setA(int a) { a = a; }\n 7.   void setB() { this.b = b; }\n 8.   int setC() { return c; }\n 9.   int setD(int num) { d = num; return d; }\n10.   void setAll(int x) { a = b = this.c = setD(x); }\n11.   @Override public String toString() {\n12.     return "Sample [a=" + a + ", b=" + b + ", c=" + c + ", d=" + d + "]";\n13.   }\n14.   public static void main(String[] args) {\n15.     Sample s = new Sample();\n16.     s.setAll(10);\n17.     System.out.println(s);\n18.   }\n19. }',
            choices: [
                "Sample [a=10, b=10, c=10, d=10]",
                "Sample [a=0, b=10, c=10, d=10]",
                "Sample [a=0, b=0, c=0, d=10]",
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
            code: " 1. public class Main {\n 2.   public static void main(String[] args) {\n 3.     int num = 0;\n 4.     do {\n 5.       num++;\n 6.       if (num == 1) {\n 7.         continue;\n 8.       }\n 9.       System.out.println(num);\n10.     } while (num < 1);\n11.   }\n12. }",
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
                "finallyブロックは、try/catch の後に配置される（最後に来る）",
                "try-with-resourcesのリソースは finally より前にクローズされる",
                "tryブロックは複数のcatchブロックを持つことができる",
                "catchブロックは、一般的な型より特定の型を先に並べる必要がある",
                "tryブロックは、catchブロックとfinallyブロックを必ず両方持たなければならない",
            ],
            answerIndex: 2,
            explanation:
                "正しいものはCとD。複数catchは可（C）。例外の多重定義は上位型より下位型を先に並べる必要がある（D）。AやBは表現の揺れを含むが設問では2つ選択の想定のためC・Dを正答とする。",
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
                "<pre><code>float a = Math.round((float) x / y * 100) / (float) 100;</code></pre>",
                "<pre><code>float a = (float)(Math.round((float) x / y * 100) / 100);</code></pre>",
                "<pre><code>float a = Math.round((int)(x / y), 2);</code></pre>",
                "<pre><code>float a = Math.round((float) x / y, 2);</code></pre>",
            ],
            answerIndex: 1,
            explanation:
                "浮動小数点の除算を行い、100倍→四捨五入→100で割ることで小数第2位までを表示できる。",
        },
        {
            id: 54,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question: "次のプログラムの説明として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public interface Sample {\n 2.     void test();\n 3. }\n 4. \n 5. class SampleImpl implements Sample {\n 6.     @Override\n 7.     public void test() {\n 8.         // do something\n 9.     }\n10. }\n11. \n12. class SubSampleImpl extends SampleImpl {\n13.     void test(int x) {\n14.         // do something\n15.     }\n16. }",
            choices: [
                "Sampleインタフェースでコンパイルエラーが発生する",
                "SampleImplクラスでコンパイルエラーが発生する",
                "SubSampleImplクラスでコンパイルエラーが発生する",
                "正常にコンパイル、実行できる",
            ],
            answerIndex: 3,
            explanation:
                "SubSampleImplではtest(int)をオーバーロードしているだけであり、オーバーライドではない。いずれもコンパイル可能。",
        },
        {
            id: 55,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question: "次のステートメントのうち、正しいものを選びなさい。（4つ選択）",
            code: "",
            choices: [
                "<pre><code>int[][] a = {{1,1},{2,2}};</code></pre>",
                "<pre><code>short b = (short)'A';</code></pre>",
                "<pre><code>byte c1 = 10;</code></pre>",
                "<pre><code>char c2 = 'c';</code></pre>",
                "<pre><code>boolean d = (10 == 10);</code></pre>",
                "<pre><code>float e = 1.9;</code></pre>",
                "<pre><code>int f = 12.34;</code></pre>",
                "<pre><code>String g = 'a';</code></pre>",
            ],
            answerIndex: 4,
            explanation:
                "float e, int f, String gは型不一致でコンパイルエラー。正しいのはa〜dとboolean d。",
        },
        {
            id: 56,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String[][] array = {\n 4.             { "A", "B" },\n 5.             { "C", "D", "E", "F", "G" }\n 6.         };\n 7.         for (int i = 0; i < array.length; i++) {\n 8.             int j = 0;\n 9.             while (j < array[i].length) {\n10.                 System.out.println("[" + i + "," + j + "]=" + array[i][j]);\n11.                 j++;\n12.             }\n13.         }\n14.     }\n15. }',
            choices: [
                "[0,0]=A [0,1]=B [1,0]=C [1,1]=D [2,0]=E [2,1]=F [2,2]=G",
                "[0,0]=A [0,1]=B [1,0]=C [2,0]=D [2,1]=E [2,2]=F [2,3]=G",
                "[0,0]=A [0,1]=B [1,0]=C [1,1]=D [2,0]=E [2,1]=F [2,2]=G",
                "[0,0]=A [0,1]=B [0,2]=C [1,0]=D [1,1]=E [1,2]=F [1,3]=G",
            ],
            answerIndex: 2,
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
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int num = 9;\n 4.         if (num < 10)\n 5.             System.out.println(num);\n 6.         else\n 7.             System.out.println("B");\n 8.     }\n 9. }',
            choices: [
                "10が表示される",
                "Bが表示される",
                "9が表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 2,
            explanation: "num=9は10より小さいためif文の条件がtrueとなり、「9」が表示される。",
        },
        {
            id: 59,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int a = 4;\n 4.         int b = 2;\n 5.         System.out.println("a + b = " + (a + b) + ", b + a = " + a + b);\n 6.     }\n 7. }',
            choices: [
                "a + b = 6, b + a = 42 と表示される",
                "a + b = 6, b + a = 6 と表示される",
                "a + b = 42, b + a = 6 と表示される",
                "a + b = 42, b + a = 42 と表示される",
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
                "[a d b e c f] と表示される",
                "[abdefc] と表示される",
                "[abcdef] と表示される",
                "[ab def cf] と表示される",
            ],
            answerIndex: 2,
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
            code: ' 1. public class A {\n 2.     protected A() {\n 3.         this(2);\n 4.         System.out.print("1");\n 5.     }\n 6.     protected A(int a) {\n 7.         System.out.print(a);\n 8.     }\n 9. }\n10. \n11. public class B extends A {\n12.     B() {\n13.         this(4);\n14.         System.out.print("3");\n15.     }\n16.     B(int b) {\n17.         System.out.print(b);\n18.     }\n19. }\n20. \n21. public class Main {\n22.     public static void main(String[] args) {\n23.         B b = new B();\n24.     }\n25. }',
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
            code: " 1. public class Sample {\n 2.     public static void print(Integer num) {\n 3.         System.out.println(num);\n 4.     }\n 5. }\n 6. \n 7. import java.util.List;\n 8. public class Main {\n 9.     public static void main(String[] args) {\n10.         List<Integer> list = List.of(1, 2, 3);\n11.         list.forEach(＿＿＿＿＿＿＿);\n12.     }\n13. }",
            choices: ["new Sample()::print", "Sample.print", "Sample::print", "Sample::print()"],
            answerIndex: 2,
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
    ],
};
