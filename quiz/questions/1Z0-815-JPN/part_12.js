const Q_1Z0_815_JPN_12 = {
    prefix: "1Z0-815-JPN",
    part: "12",
    questions: [
        {
            id: 1,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次の2つのコードのクラスファイルを生成するためのコマンドとして、正しいものを選びなさい。（1つ選択）",
            code: "1. package b;\n2. public class B {\n3. }\n\n1. package a;\n2. import b.B;\n3. public class A {\n4.     public static void main(String[] args) {\n5.         B b = new B();\n6.     }\n7. }",
            choices: [
                "<code>java a/A.java\n</code>",
                "<code>java b/B.java\n</code>",
                "<code>javac b/B.java\njava a/A.java</code>",
                "<code>javac a/A.java\njava a/A</code>",
            ],
            answerIndex: 3,
            explanation:
                "この問題では、aパッケージのAクラスがbパッケージのBクラスに依存しています。\n\nJavaのプログラムを実行するには、まず依存しているクラス（この場合はBクラス）を先にコンパイルし、その後Aクラスをコンパイルします。\n\nAクラスのmainメソッドを実行するには、コンパイル後にjavaコマンドでa/Aを指定します。\n\nしたがって、\n\njavac a/A.java\njava a/A\n\nの順でコマンドを実行するのが正しい手順です。\n\n依存関係のあるクラスは、必ず先にコンパイルしておく必要がある点に注意しましょう。",
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
                "Javaのソースファイルでは、記述する順番が決まっています。\n\nまず最初にpackage宣言を書きます。\n次にimport宣言を書きます。\n最後にクラスやインタフェースの宣言を記述します。\n\nこの順序以外で記述すると、コンパイルエラーとなります。\n\n正しい順番は、package → import → class です。\n\nJavaの構文ルールとして、宣言の順序に注意しましょう。",
        },
        {
            id: 3,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムを確認し、Mainクラスの2行目の空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: " 1. package com.sample;\n 2. public class Sample {\n 3.     public void sample() {\n 4.         // any code\n 5.     }\n 6. }\n\n 1. package com.sample.test;\n 2. public class Test {\n 3.     public void test(int num) {\n 4.         // any code\n 5.     }\n 6. }\n\n 1. package com;\n 2. __________\n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         new Sample().sample();\n 6.         int num = Integer.parseInt(args[0]);\n 7.         new Test().test(num);\n 8.     }\n 9. }",
            choices: [
                "<code>import java.lang.Integer;\nimport com.*;</code>",
                "<code>import com.sample.*;\n</code>",
                "<code>import com.sample.Sample;\nimport com.sample.test.*;</code>",
                "<code>import java.lang.*;\n</code>",
            ],
            answerIndex: 2,
            explanation:
                "この問題では、Mainクラスからcom.sampleパッケージのSampleクラスと、com.sample.testパッケージのTestクラスを利用しています。\n\nJavaでは、他のパッケージに属するクラスを使う場合、import文でそのクラスやパッケージを明示的にインポートする必要があります。\n\nSampleクラスを使うにはcom.sample.Sample、Testクラスを使うにはcom.sample.testパッケージをインポートする必要があります。\n\nしたがって、\n\nimport com.sample.Sample;\nimport com.sample.test.*;\n\nのように記述することで、Mainクラス内でSampleとTestの両方を利用できるようになります。\n\n複数のパッケージにまたがるクラスを使う場合は、それぞれのパッケージを正しくimportする点に注意しましょう。",
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
                "このプログラムでは、ラムダ式の中でローカル変数iを参照しています。\n\nJavaでは、ラムダ式内で使うローカル変数はfinal、または実質的にfinal（値が再代入されていない）でなければなりません。\n\nこのコードでは、i++によってiの値が変更されているため、iは実質finalではなくなります。\n\nそのため、コンパイル時にエラーとなります。\n\nラムダ式でローカル変数を使う場合は、値を変更しないことが条件である点に注意しましょう。",
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
                "このプログラムでは、mainメソッド内でint num = num;と記述しています。\n\nこのとき、右辺のnumはローカル変数numを指しますが、まだ初期化されていないため、自分自身を参照することになります。\n\nJavaでは、ローカル変数は初期化される前に参照することはできません。\n\nそのため、このコードはコンパイルエラーとなります。\n\n同じ名前の変数がスコープ内に複数存在する場合、ローカル変数が優先される点と、初期化前の参照はエラーになる点に注意しましょう。",
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
                "この問題の2つのモジュール設定ファイルでは、どちらのモジュールもexports句がないため、パッケージは外部に公開されません。\n\nまた、Javaのモジュールシステムでは、2つのモジュールが互いにrequiresし合う（循環依存）ことは許可されていません。\n\nこのような循環依存がある場合、コンパイルエラーとなります。\n\nモジュールの名前の長さや、java.baseモジュールの必須性は今回の正誤には関係ありません。\n\nモジュール間の依存関係や、exports句の有無に注意しましょう。",
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
                'このプログラムでは、switch文でdataが1の場合にどのような出力になるかを問われています。\n\nswitch文のcaseに1がないため、default節が最初に実行されます。\n\ndefault節にはbreakが書かれていないため、そのまま次のcase 0の処理に進みます（これをfallthroughと呼びます）。\n\ncase 0のSystem.out.printで"A"が出力され、ここでbreakがあるためswitch文を抜けます。\n\nしたがって、最終的な出力は"C"と"A"が続けて表示されます。\n\nswitch文のfallthrough（breakがない場合に次のcaseに処理が流れる）に注意しましょう。',
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
                'このプログラムでは、まず文字列strに"hoge456test"が代入され、indexは5で初期化されています。\n\nstr.charAt(index)は6文字目、つまり\'5\'となります。\n\nCharacter.isAlphabetic(str.charAt(index))はfalse、Character.isDigit(str.charAt(index))はtrueなので、indexは10に更新されます。\n\n次に、str.endsWith("test")がtrueなので、str.substring(0, index)が実行されます。\n\nsubstring(0, 10)は、先頭から10文字分（hoge456tes）を切り出します。\n\nそのため、最終的な出力は"hoge456tes"となります。\n\n条件分岐の流れとsubstringの動作に注意しましょう。',
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
                "クラスやモジュールの依存関係を調べるには、jdepsコマンドやjavaコマンドの--show-module-resolutionオプションを使います。\n\njdeps --list-depsは、指定したクラスやJARファイルが依存しているパッケージやモジュールを一覧表示します。\n\njava --show-module-resolutionは、アプリケーション起動時にモジュールの解決結果（どのモジュールがどれに依存しているか）を表示します。\n\njmod describeはjmodファイルの情報を表示するコマンドで、依存関係の一覧は出力しません。\n\njar --show-module-resolutionというオプションは存在しません。\n\njava Hello.javaはソースファイルを直接実行するだけで依存関係の表示は行いません。\n\n依存関係の調査にはjdepsやjavaのオプションを活用しましょう。",
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
                "以下をposition 3に記述する\n<code>public void z() {}\n</code>",
                "以下をposition 2に記述する\n<code>void x(){}\n</code>",
                "以下をposition 1に記述する\n<code>implements A\n</code>",
            ],
            answerIndex: 1,
            explanation:
                "この問題では、抽象クラスBが抽象メソッドz()を持っており、CはBを継承する具体クラスです。\n\n具体クラス（abstractでないクラス）は、継承した抽象メソッドをすべて実装しなければなりません。\n\nBのz()は抽象メソッドなので、Cでz()を実装する必要があります。\n\nx()メソッドはBクラスですでにpublicで実装されているため、Cで再定義する必要はありません。\n\nまた、Bにimplements Aを付けても、Cでz()の未実装は解消されません。\n\nしたがって、Cクラスのposition 3にz()の実装を追加することで、コンパイルが成功します。\n\n抽象クラスを継承した具体クラスでは、すべての抽象メソッドを実装する必要がある点に注意しましょう。",
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
                "このプログラムでは、mainメソッドの引数argsがString...（可変長引数）として宣言されています。\n\n可変長引数は内部的には配列（String[]）として扱われます。\n\n拡張for文（for-each文）でvar value : argsと書いた場合、valueの型は配列の要素型、つまりString型になります。\n\nvarは型推論のためのキーワードであり、実際の型は右辺から決まります。\n\nしたがって、この場合のvalueの型はStringです。\n\n拡張for文で配列や可変長引数を扱うときは、繰り返し変数の型に注意しましょう。",
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
                'indexOfメソッドは、指定した文字列が最初に現れる位置のインデックスを返します。\nこの場合、"abcd ef gh"の中で"ef"が始まるのはインデックス5です。\n\nsubstringメソッドは、指定した位置から文字列を切り出しますが、\nこのプログラムでは戻り値を変数に代入していないため、str自体は変更されません。\n\nそのため、strは元の"abcd ef gh"のままです。\n\nSystem.out.println(str + " " + x); で出力されるのは、元の文字列"abcd ef gh"と5です。\n\nポイント：\n- Stringは不変（immutable）\n- substringの戻り値を代入しないと元の文字列は変わらない\n- indexOfは最初に見つかった位置（0始まり）を返す\n\nこのため、出力は「abcd ef gh 5」となります。',
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
                "このプログラムでは、static変数strは初期化されていないため、デフォルトでnullとなります。\n\nswitch文でnullを評価しようとすると、実行時にNullPointerExceptionが発生します。\n\nJavaのswitch文は、式がnullの場合に例外をスローする仕様です。\n\nそのため、このプログラムを実行すると、何も出力されずに例外で異常終了します。\n\nString型の変数をswitch文で使う場合は、nullでないことを事前に確認することが重要です。",
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
                "ラムダ式のパラメータxの型は、listコレクションの要素型と一致します。\nこのプログラムでは、listはList<String>型であり、要素はすべてString型です。\nそのため、forEachのラムダ式で受け取るxもString型となります。\n\nList<Character>やchar型ではなく、コレクションの型に合わせてString型となる点がポイントです。",
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
                "このプログラムはex15パッケージに属する2つのクラス（SampleとMain）で構成されています。\n\nパッケージを使う場合、コンパイル時に-dオプションでクラスファイルの出力先ディレクトリ（例: build）を指定する必要があります。\n\njavaコマンドで実行する際は、-cpオプションでクラスパスにbuildディレクトリを指定し、完全修飾クラス名（ex15.Main）で実行します。\n\n-dや-cpオプションを正しく使わないと、クラスが見つからずエラーになります。\n\nこのように、パッケージ構成のJavaプログラムでは、コンパイル・実行時のコマンド指定が重要です。",
        },
        {
            id: 16,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行した結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.time.LocalDate;\n 2. import static java.time.DayOfWeek.*;\n 3.\n 4. public class Sample {\n 5.     public static void main(String[] args) {\n 6.         var today = LocalDate.now().with(TUESDAY).getDayOfWeek();\n 7.         switch (today) {\n 8.             case SUNDAY:\n 9.             case SATURDAY:\n10.                 System.out.println("weekend");\n11.                 break;\n12.             case MONDAY:\n13.                  FRIDAY:\n14.                 System.out.println("working");\n15.             default:\n16.                 System.out.println("other");\n17.         }\n18.     }\n19. }',
            choices: [
                "「working」と表示される",
                "「working」「other」と表示される",
                "「Tuesday」と表示される",
                "「other」と表示される",
            ],
            answerIndex: 3,
            explanation:
                "LocalDate#with(TUESDAY)によって、todayは必ず火曜日（TUESDAY）になります。\n\nswitch文では、TUESDAYに対応するcaseがありません。\nそのため、どのcaseにも該当せず、default節が実行されます。\n\n結果として「other」と表示されます。\n\nこのように、switch文で列挙型を使う場合、すべての値に対応するcaseがないとdefaultが実行される点に注意が必要です。",
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
                "ローカル変数にはfinal修飾子を付けることができ、これにより再代入が禁止されます。\n\nインナークラス（クラスの中に定義されたクラス）は、public修飾子を付けて宣言することが可能です。\n\n一方、インタフェースはprotected修飾子を付けて宣言できません。\nまた、抽象メソッドにprivate修飾子を付けることもできません（抽象メソッドはサブクラスでの実装が前提のため）。\n\nインスタンス変数にstaticを付けると、それはインスタンス変数ではなくクラス変数（static変数）となります。\n\nこのように、修飾子の使い方にはそれぞれ制約があるため、正しい組み合わせを理解しておくことが重要です。",
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
                "この問題は、モジュールの依存関係とグラフの読み取りがポイントです。\n\nコマンド出力から、com.sampleモジュールはcom.loggingとcom.xmlにtransitive依存しています。\njava.baseは全てのモジュールが暗黙的に依存するため、明示的にrequiresしなくてもよいモジュールです。\n\nしたがって、com.sampleモジュールの設定で明示的に依存を宣言する必要があるのはcom.loggingとcom.xmlのみです。\n\nexportsはパッケージ公開の宣言であり、依存関係のグラフには直接影響しません。\nusesはサービス利用の宣言であり、依存関係の矢印にはなりません。\n\nポイント：\n- java.baseは全モジュールが暗黙的に依存\n- requiresで明示的に依存するモジュールのみグラフに矢印\n- exportsやusesは依存関係の矢印にはならない\n\nこのため、com.sampleからcom.loggingとcom.xmlに矢印が伸びるグラフが正解です。",
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
                "Mainクラスのmainメソッドでは、A型の変数aにBのインスタンスを代入しています。\n\nしかし、a.bye()の呼び出しはコンパイルエラーとなります。\n理由は、変数aの型がAであり、Aクラスにはbye()メソッドが定義されていないためです。\n\nたとえ実体がBであっても、参照型であるAに存在しないメソッドは呼び出せません。\n\nこのように、参照型に存在しないメソッドを呼び出そうとすると、コンパイル時にエラーとなります。",
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
                "testメソッドは引数を2つ（char型とint型）受け取るように定義されています。\n\nmainメソッド内でapp.test('A')と呼び出していますが、引数が1つしか渡されていません。\nこのため、引数の数が一致せず、メソッド呼び出し時にコンパイルエラーとなります。\n\nJavaでは、メソッドの引数の数や型が一致しない場合、オーバーロードの解決ができずコンパイルエラーになります。\n\nしたがって、このプログラムはコンパイルエラーとなります。",
        },
        {
            id: 21,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "多次元配列のインスタンス化と初期化のコードとして、正しいものを選びなさい。（2つ選択）",
            code: "",
            choices: [
                "<code>int[][] array = {{1,2,3},{4,5,6}};\n</code>",
                "<code>int[][][] array = {{1,2},{3,4},{5,6}};\n</code>",
                "<code>int[][] array = {0,1};\n</code>",
                "<code>int[][] array = new int[][2];\narray[0][0] = 1;\narray[0][1] = 2;\narray[1][0] = 3;\narray[1][1] = 4;</code>",
                "<code>int[] array = {0,1};\nint[][][] array2 = new int[2][2][2];\narray2[0][0] = array;\narray2[0][1] = array;\narray2[1][0] = array;\narray2[1][1] = array;</code>",
            ],
            answerIndex: [0, 4],
            explanation:
                "多次元配列の初期化や代入について、Javaでは配列リテラルや既存配列の参照を使った代入が正しく行えます。\n\nint[][] array = {{1,2,3},{4,5,6}}; のように、2次元配列をリテラルで初期化する書き方は正しい構文です。\n\nまた、int[] array = {0,1}; と1次元配列を作成し、int[][][] array2 = new int[2][2][2]; の各要素に array を代入することも、配列の型や次元が一致していれば問題ありません。\n\n一方で、int[][] array = {0,1}; のように2次元配列に1次元配列リテラルを直接代入したり、int[][] array = new int[][2]; のように配列のサイズ指定が不完全な場合は文法エラーとなります。\n\nこのように、配列の初期化や代入は、型や次元が正しく一致しているかどうかがポイントです。",
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
                "CクラスはBクラスを継承し、BクラスはAクラスを継承しています。\n\nAクラスのフィールドnumはアクセス修飾子が指定されていないため（デフォルトでpackage-private）、同じパッケージ内であればCクラスからもsuper.numでアクセスできます。\n\nまた、CクラスのgetValueメソッド内でsuper.getValue()を呼び出すことで、BクラスのgetValueメソッドを利用できます。\n\nこのように、継承関係にあるクラスでは、上位クラスのフィールドやメソッドにアクセスできる場合があります（アクセス修飾子の制約に注意）。",
        },
        {
            id: 23,
            category: "総仕上げ問題①",
            difficulty: "上級",
            question: "次のプログラムの説明として、正しいものを選びなさい。（3つ選択）",
            code: ' 1. import java.util.Collection;\n 2. public class A {\n 3.     public void sample(Collection arg) {\n 4.         System.out.println("A");\n 5.     }\n 6. }\n\n 1. import java.util.Collection; 2. import java.util.List;\n 3. public class B extends A {\n 4.     public void sample(Collection arg) {\n 5.         System.out.println("B");\n 6.     }\n 7.     public void sample(List arg) {\n 8.         System.out.println("C");\n 9.     }\n10. }\n\n 1. import java.util.*;\n 2. public class Main {\n 3.     public static void main(String[] args) {\n 4.         A a1 = new A();\n 5.         A a2 = new B();\n 6.         B b1 = new B();\n 7.         List<String> list = new ArrayList<>();\n 8.         // do something\n 9.     }\n10. }',
            choices: [
                "a1.sample(list) を実行すると A が表示される",
                "a2.sample(list) を実行すると A が表示される",
                "a2.sample(list) を実行すると B が表示される",
                "b1.sample(list) を実行すると B が表示される",
                "b1.sample(list) を実行すると C が表示される",
            ],
            answerIndex: [0, 2, 4],
            explanation:
                "この問題は、メソッドのオーバーライドとオーバーロードの動作を問うものです。\n\na1はA型なので、a1.sample(list)はAクラスのsample(Collection)が呼ばれ、『A』と表示されます。\n\na2はA型の変数ですが、実体はBなので、Bクラスでオーバーライドされたsample(Collection)が呼ばれ、『B』と表示されます。\n\nb1はB型で、引数にListを渡すと、Bクラスのsample(List)（オーバーロード）が最も適合するため、『C』と表示されます。\n\nこのように、オーバーライドは実体のクラスで決まり、オーバーロードは引数の型で最も適合するメソッドが選ばれます。",
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
                "DクラスはBインタフェースとCインタフェースの両方からdefaultメソッドsample()を継承しています。\n\nこの場合、どちらのdefaultメソッドを使うか曖昧になるため、Dクラスで明示的にsample()をオーバーライドしなければコンパイルエラーとなります。\n\nまた、Dクラスのsample()内でsuper.sample()を呼び出そうとしていますが、インタフェースのdefaultメソッドはsuperで直接呼び出すことはできません。\n\nこのように、複数のインタフェースから同名のdefaultメソッドを継承した場合は、必ず自分で実装を明示する必要があります。",
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
                "Aクラスの抽象メソッドvoid sample()は、Bクラスで必ず同じシグネチャ（引数なし）でオーバーライドする必要があります。\n\nしかし、Bクラスではvoid sample(int i)という別のメソッドを定義しており、引数の有無が異なるためオーバーライドになっていません。\n\nこのため、Bクラスは抽象メソッドを実装していないことになり、コンパイルエラーとなります。\n\nJavaでは、抽象メソッドを持つクラスを継承した場合、すべての抽象メソッドを正しくオーバーライドしなければなりません。",
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
                "<code>List<B> listC = new ArrayList<>();\nlistC.add(new D());</code>",
                "<code>List<D> listD = new ArrayList<>();\nlistD.add(new C());</code>",
                "<code>List<A> listE = new ArrayList<>();\nlistE.add(new C());</code>",
            ],
            answerIndex: 3,
            explanation:
                "List<D>はD型のインスタンスのみを格納できるリストです。\n\nCはDのスーパークラスですが、List<D>にC型のインスタンスを追加することはできません。\n\nJavaのジェネリクスでは、リストの型パラメータが一致しない限り、異なる型のインスタンスを追加することはできず、コンパイルエラーとなります。\n\nこのように、リストの型と追加するインスタンスの型の関係に注意が必要です。",
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
                "メソッドのオーバーロードでは、引数の型が最も適合するものが選ばれます。\n\nmainメソッドのtest(10, 20)は、int型のリテラルなのでtest(int a, int b)が呼ばれ、『D』と表示されます。\n\ntest(10.0, 20.0)はdouble型のリテラルなのでtest(double a, double b)が呼ばれ、『B』と表示されます。\n\nこのように、Javaのメソッド呼び出しでは、引数の型に最も合致するメソッドが選択されます。",
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
                "インターフェース（A）はfinalにできません。finalにすると継承や実装ができなくなり、インターフェースの役割を果たせなくなるためです。\n\nBはAを実装しているので、BはAのサブタイプです。\n\nまた、Bはabstractにできません。なぜなら、BはAの抽象メソッドをすべて実装しているため、抽象クラスにする必要がありません。\n\nこのように、インターフェースやクラスの修飾子や継承関係には制約があるため、正しい組み合わせを理解しておくことが重要です。",
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
            explanation:
                "JDKをモジュール化することで、各モジュール間の依存関係が明確になり、不要なモジュールを除外しやすくなります。\n\nこれにより、アプリケーションモジュールとJDKのモジュールのリンクが容易に構築できるようになります。\n\nまた、モジュールごとにアクセス制御が強化されるため、セキュリティやメンテナンス性も向上します。\n\nこのように、モジュール化は依存関係の明確化とセキュリティ・保守性の向上に寄与します。",
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
                "クラスCのインスタンスを生成すると、まず親クラスであるBのコンストラクタが呼ばれ、そのBの親であるAのコンストラクタが最初に呼ばれます。\n\nJavaでは、サブクラスのコンストラクタが呼ばれる前に、必ずスーパークラスのコンストラクタが順に呼び出される仕組みです。\n\nそのため、A→B→Cの順でコンストラクタが実行され、『ABC』と表示されます。\n\nこのように、継承関係のあるクラスでインスタンスを生成すると、親クラスから順にコンストラクタが呼ばれる点がポイントです。",
        },
        {
            id: 31,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.ArrayList;\n 2. import java.util.Arrays;\n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         var alphabet = new ArrayList<>(\n 6.             Arrays.asList( new String[] {"A", "B", "C", "D", "E"} )\n 7.         );\n 8.         alphabet.sort((var a, var b) -> -a.compareTo(b));\n 9.         alphabet.forEach(System.out::println);\n10.     }\n11. }',
            choices: [
                "何も表示されない",
                "「A」「B」「C」「D」「E」と表示される",
                "「E」「D」「C」「B」「A」と表示される",
                "「A」「B」と表示される",
            ],
            answerIndex: 2,
            explanation:
                'alphabetリストは、"A"から"E"までの文字列を持つArrayListとして初期化されます。\n\nsortメソッドのラムダ式では、-a.compareTo(b)とすることで、通常の昇順ソートの結果を逆転させています。\n\nそのため、リストは降順（E, D, C, B, A）に並び替えられ、forEachで1つずつ出力されます。\n\nこのように、比較結果にマイナスを付けることで、簡単に降順ソートが実現できます。',
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
                "<code>abstract class Item {\n    public abstract int calcPrice(Item item) { /* do something */ }\n    public abstract void print(Item item) { /* do something */ }\n}</code>",
            ],
            answerIndex: 0,
            explanation:
                "抽象クラスは、abstract修飾子を付けて定義し、抽象メソッド（本体のないメソッド）を1つ以上持つことができます。\n\n抽象メソッドは、メソッド本体（{}）を持たず、セミコロンで終わる必要があります。\n\n選択肢の中で、抽象クラスと抽象メソッドの定義が正しいのは、abstract class Item { public abstract int calcPrice(Item item); public void print(Item item) { /* do something */ } } です。\n\nこのように、抽象クラスには抽象メソッドと具象メソッドの両方を定義できます。",
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
                "List.of()で生成されたリストは不変（immutable）であり、要素の追加や削除、clear()などの変更操作はサポートされていません。\n\nそのため、keys.clear()を実行するとUnsupportedOperationExceptionがスローされ、プログラムは異常終了します。\n\nこのように、不変リストに対して変更操作を行うと例外が発生する点に注意が必要です。",
        },
        {
            id: 34,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         char c = 'b';\n 4.         int i = 0;\n 5.         switch (c) {\n 6.             case 'a':\n 7.                 i++;\n 8.                 break;\n 9.             case 'b':\n10.                 i++;\n11.             case 'c' | 'D':\n12.                 i++;\n13.             case 'e':\n14.                 i++;\n15.                 break;\n16.             case 'f':\n17.                 i++;\n18.                 break;\n19.             default:\n20.                 System.out.println(c);\n21.         }\n22.         System.out.println(i);\n23.     }\n }",
            choices: ["3が表示される", "b1が表示される", "1が表示される", "b2が表示される"],
            answerIndex: 0,
            explanation:
                "switch文でchar型の変数cが'b'の場合、case 'b'に一致し、i++が実行されますがbreakがないため次のcase 'c' | 'D'に進み、さらにi++が実行されます。\nその後、case 'e'にもbreakがないためi++がもう一度実行され、合計でiは3増えます。\n\nしたがって、最終的に「3」が表示されます。\n\nこのように、switch文でbreakがない場合は次のcaseに処理が続く（フォールスルー）点に注意が必要です。",
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
                "privateメソッドはサブクラスからオーバーライドされず、それぞれのクラス内でのみ有効です。\n\nAクラスのaメソッドはAクラスのprintメソッドを呼び出し、BクラスのbメソッドはBクラスのprintメソッドを呼び出します。\n\nそのため、b.a()の呼び出しで『A』、b.b()の呼び出しで『B』と表示されます。\n\nこのように、privateメソッドは継承されず、同名のメソッドがあっても別物として扱われる点に注意が必要です。",
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
            explanation:
                "元のwhile文は、xが0から9までの値を後置インクリメントx++で出力しています。\n\n選択肢のfor文のうち、for (int a = 0; a < 10; ) { System.out.print(a); a++; } は、aが0から9まで出力され、a++でインクリメントされるため、while文と同じ動作になります。\n\n他の選択肢は、前置インクリメントや無限ループ、インクリメントの位置が異なるため、出力結果が異なります。\n\nこのように、後置インクリメントの挙動を正しく再現できるfor文を選ぶことがポイントです。",
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
                "boolean型のメソッドは、条件式の評価結果（trueまたはfalse）をそのままreturnできるため、条件式を返す定義は正しいです。\n\nvoid型のメソッドでは、値を返さずreturn;のみ記述することができます。\n\n一方、void型で値を返したり、戻り値型と異なる型をreturnする定義は誤りとなります。\n\nこのように、メソッドの戻り値型とreturn文の使い方に注意することが重要です。",
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
                "List.of()で生成されたリストは不変（immutable）であり、要素の追加や削除などの変更操作はできません。\n\nそのため、list.add('a')を実行した時点でUnsupportedOperationExceptionがスローされ、プログラムは異常終了します。\n\nこのように、不変リストに対して変更操作を行うと例外が発生する点に注意が必要です。",
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
                "コマンドライン引数の指定 java A \"A B\" A B では、引数は順に『A B』『A』『B』となります。\n\nmainメソッドのargs配列には、['A B', 'A', 'B'] が格納されます。\n\nfor文で順に出力すると、『A B』『A』『B』が連続して表示されるため、『A BAB』となります。\n\nこのように、コマンドライン引数でダブルクォートで囲んだ部分は1つの引数として扱われる点に注意が必要です。",
        },
        {
            id: 40,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String[] array = {"A", "B", "C", "D"};\n 4.         for (int i = 0; i < array.length; i++) {\n 5.             System.out.print(array[i] + " ");\n 6.             if (array[i].equals("C")) {\n 7.                 continue;\n 8.             }\n 9.             System.out.println("end");\n10.             break;\n11.         }\n12.     }\n13. }',
            choices: [
                "「A B C end」と表示される",
                "「A B C D end」と表示される",
                "「A end」と表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 2,
            explanation:
                'for文の最初のループでarray[0]は"A"なので、System.out.printで"A "が出力されます。\n\nif文の条件(array[i].equals("C"))はfalseなので、continueは実行されず、次のSystem.out.println("end")が実行されます。\n\nその後、breakでループが終了するため、出力は『A end』となります。\n\nこのように、breakやcontinueの位置によってループの挙動が変わる点に注意が必要です。',
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
                "BインタフェースとCインタフェースは、どちらもa()という同名のメソッドを持っていますが、戻り値の型が異なります（Collection型とPath型）。\n\nこのように、複数のインタフェースから同名で戻り値型が異なるメソッドを継承しようとすると、どちらを採用すべきか曖昧になり、コンパイルエラーとなります。\n\nインタフェースの多重継承では、同名メソッドの戻り値型が一致していない場合に注意が必要です。",
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
                "フィールドxはメソッドと異なり、オーバーライド（動的バインディング）の対象にはなりません。\n\nA型の参照aでa.xとアクセスすると、Aクラスで定義されたxフィールドが参照されます。\n\nそのため、実体がBクラスであっても、出力されるのはAクラスのxの値『A』となります。\n\nこのように、フィールドの参照は参照型で決まり、サブクラスで同名のフィールドを定義しても上書きにはならない点に注意が必要です。",
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
                "AクラスのisValueメソッドはprivateで定義されているため、Bクラスからは呼び出すことができません。\n\nBクラスのtestメソッド内でisValue(num)を呼び出そうとすると、アクセス修飾子の制約によりコンパイルエラーとなります。\n\nprivateメソッドは定義されたクラス内からのみアクセス可能であり、サブクラスからは継承もアクセスもできません。\n\nこのように、privateメソッドはサブクラスから利用できない点に注意が必要です。",
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
                "このプログラムは、サブクラスのコンストラクタ呼び出し規則がポイントです。\n\nSubSampleクラスの3行目のコンストラクタでは、明示的にsuper(...)を呼び出していません。\nJavaでは、サブクラスのコンストラクタ内でsuper(...)またはthis(...)のいずれかを最初に呼び出す必要があります。\n呼び出しがない場合、暗黙的に親クラスのデフォルトコンストラクタ（引数なし）が呼ばれますが、\n親クラスSampleには引数なしのコンストラクタが定義されていないため、3行目でコンパイルエラーとなります。\n\nまた、8行目のthis(price)の呼び出しも、super(...)より前に記述されていないため、コンパイルエラーとなります。\n\nこのように、SubSampleクラスの3行目と8行目の両方でコンパイルエラーが発生します。\n\nポイント：\n- サブクラスのコンストラクタではsuper(...)またはthis(...)の呼び出しが必須\n- 親クラスにデフォルトコンストラクタがない場合は明示的なsuper(...)が必要\n- this(...)やsuper(...)の呼び出し位置にも注意\n\nこのため、3行目と8行目の両方でコンパイルエラーになります。",
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
                "SampleTest2はSampleインタフェースを実装していないにもかかわらず、@Overrideアノテーションを付けてtestメソッドを定義しています。\n\n@Overrideは、親クラスやインタフェースのメソッドを正しくオーバーライドしている場合にのみ使うべきアノテーションです。\n\nインタフェースを実装していないクラスで@Overrideを付けると、コンパイルエラーとなります。\n\n他の選択肢は、インタフェースの実装や抽象クラスでの抽象メソッドのオーバーライドとして正しい定義です。",
        },
        {
            id: 46,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル・実行した結果として正しいものを選びなさい。なお、現在の日付は2019年8月14日とする。（1つ選択）",
            code: " 1. import java.time.LocalDate;\n 2. public class Diary {\n 3.     private LocalDate now = LocalDate.now();\n 4.     public LocalDate getNow() {\n 5.         return this.now;\n 6.     }\n 7. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Diary d = new Diary();\n 4.         System.out.println(d.getNow());\n 5.     }\n 6. }",
            choices: [
                "「2019-08-14」と表示される",
                "「08-14-2019」と表示される",
                "「14-08-2019」と表示される",
                "「08-14」と表示される",
                "「2019-08」と表示される",
            ],
            answerIndex: 0,
            explanation:
                "LocalDate#toStringは、日付をISO-8601形式（YYYY-MM-DD）で出力します。\n\n設問のプログラムでは、LocalDate.now()で現在の日付（2019年8月14日）が取得され、そのままtoStringで出力されるため『2019-08-14』と表示されます。\n\nこのように、LocalDateの標準出力はISO形式である点に注意が必要です。",
        },
        {
            id: 47,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次の数式を表したコードとして、正しいものを選びなさい。（1つ選択）\n![](img/1Z0-815-JPN_12-047_q.png)",
            code: "",
            choices: [
                "<code>a = b * (c * Math.pow(1 + c, n) / (Math.pow(1 + c, n) - 1));</code>",
                "<code>a = b * c * Math.pow(1 + c, n) / Math.pow(1 + c, n) - 1;</code>",
                "<code>a = b * c + (Math.pow(1 + c, n) / (Math.pow(1 + c, n) - 1));</code>",
                "<code>a = b * Math.pow(1 + c, n) - 1 / (c * Math.pow(1 + c, n));</code>",
            ],
            answerIndex: 0,
            explanation:
                "べき乗の計算にはMath.powを使い、分母全体を括弧で囲む必要があります。\n\n選択肢の中で、a = b * (c * Math.pow(1 + c, n) / (Math.pow(1 + c, n) - 1)); は、数式の構造を正しくJavaコードで表現しています。\n\n他の選択肢は、演算子の優先順位や括弧の位置が異なり、数式どおりの計算になりません。\n\nこのように、数式をコードに落とし込む際は、括弧の使い方や演算順序に注意することが重要です。",
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
                "コマンドライン引数として渡された値は、args配列に順に格納されます（この場合はa, b, c）。\n\nfor文でargsの各要素を取り出し、iを出力してからインクリメントしているため、1) a、2) b、3) c の順で出力されます。\n\nMainというクラス名は引数には含まれません。\n\nこのように、コマンドライン引数はmainメソッドのargs配列に格納され、for文で順に処理されます。",
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
                "setAll(10)の呼び出しでは、setD(10)が実行され、dに10が代入され、10が返されます。\n\n代入式 a = b = this.c = setD(x); は右から左に評価されるため、まずcに10が代入され、次にbに10、最後にaに10が代入されます。\n\nそのため、すべてのフィールドa, b, c, dが10となり、Sample [a=10, b=10, c=10, d=10]と表示されます。\n\nこのように、連続した代入式は右から左に評価される点に注意が必要です。",
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
                "このプログラムはdo-while文を使っています。\n\nnumは0から始まり、ループの最初で1にインクリメントされます。\nnumが1のとき、continue文でSystem.out.println(num);がスキップされます。\nその後、whileの条件(num < 1)は偽となり、ループは1回で終了します。\n\nこのため、画面には何も表示されません。\n\nポイント：\n- do-while文は必ず1回は実行される\n- continue文で以降の処理がスキップされる\n- ループ条件が偽になった時点で終了する",
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
                "・finallyブロックは、tryブロックまたはcatchブロックの直後に必ず配置します。\n\n・tryブロックは複数のcatchブロックを持つことができ、異なる例外型ごとに個別に処理できます。\ncatchブロックの順序は、特定の例外型（下位型）を先に、より一般的な型（上位型）を後に書く必要があります。\n\n・try-with-resources構文では、finallyブロックが実行された後にリソースのclose()が呼ばれます。\n\n・catchやfinallyブロックは必須ではなく、tryブロック単体で使うことはできませんが、catchまたはfinallyのどちらか一方があれば構文上は成立します。\n\nこの問題のポイントは、finallyブロックの配置場所とcatchブロックの複数定義、catchの順序、try-with-resourcesの動作です。",
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
                "Arrays.mismatchは、2つの配列を先頭から比較し、最初に異なる要素のインデックスを返します。\nこの場合、array1とarray2はインデックス2の要素（3と4）が異なるため、result1は2になります。\n\nArrays.compareは、配列を辞書順で比較し、最初に異なる要素で大小を判定します。\narray1[2]=3、array2[2]=4なので、array1の方が小さいと判定され、result2は-1になります。\n\nしたがって、出力は「2:-1」となります。\n\nポイント：\n- mismatchは最初に異なるインデックスを返す\n- compareは最初に異なる要素で大小を判定し、同じなら長さで判定する",
        },
        {
            id: 53,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムを実行したときに「2.5」と表示されるようにしたい。4行目の空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         byte x = 5, y = 2;\n 4.         __________\n 5.         System.out.println(a);\n 6.     }\n 7. }",
            choices: [
                "<code>float a = Math.round((float) x / y * 100) / (float) 100;</code>",
                "<code>float a = (float)(Math.round((float) x / y * 100) / 100);</code>",
                "<code>float a = Math.round((int)(x / y), 2);</code>",
                "<code>float a = Math.round((float) x / y, 2);</code>",
            ],
            answerIndex: 0,
            explanation:
                "この問題は、2つのbyte型変数xとyを使って「2.5」と表示する方法を問うものです。\n\n整数同士の除算では小数点以下が切り捨てられるため、(float)で型変換してから計算する必要があります。\n\nMath.round((float) x / y * 100) で小数第2位までを四捨五入し、最後に100で割ることで「2.5」という結果が得られます。\n\nポイント：\n- 整数同士の除算は小数点以下が切り捨てられる\n- (float)で型変換してから計算する\n- 小数第2位まで表示したい場合は100倍→四捨五入→100で割る\n\nこの手順で正しい結果が得られます。",
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
                "このプログラムは、インタフェースの実装とメソッドのオーバーライド、オーバーロードに関する問題です。\n\nSampleImplクラスは、Sampleインタフェースのvoid test()メソッドを正しくオーバーライドしています。\nSubSampleImplクラスでは、引数付きのvoid test(int x)メソッドを定義していますが、これはオーバーロード（同名で引数違い）となり、\n親クラスのvoid test()メソッドも継承されます。\n\nどのクラスもインタフェースの契約を守っており、コンパイルエラーは発生しません。\n\nポイント：\n- オーバーライドはシグネチャ（引数・戻り値）が完全一致\n- オーバーロードは同名で引数違いのメソッド追加\n- インタフェースのメソッドは実装クラスで必ず実装されていること\n\nこのため、正常にコンパイル・実行できます。",
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
                "<code>byte c1 = 10; char c2 = c1;</code>",
                "<code>boolean d = (10 == 10);</code>",
                "<code>float e = 1.99;</code>",
                "<code>int f = 12_34;</code>",
                "<code>String g = 'a';</code>",
            ],
            answerIndex: [0, 1, 3, 5],
            explanation:
                "・int[][] a = {{1,1},{2,2}}; は2次元配列の正しい初期化方法です。\n\n・short b = (short)'A'; は、char型（'A'）をshort型にキャストして代入できるため正しいです。\n\n・boolean d = (10 == 10); は、比較演算の結果（true/false）をboolean型に代入しており正しいです。\n\n・int f = 12_34; は、数値リテラルの途中にアンダースコアを入れることができるため正しいです。\n\n【不正解の選択肢のポイント】\n- byte c1 = 10; char c2 = c1; は、byteからcharへの暗黙変換はできません。\n- float e = 1.99; は、floatリテラルには末尾にfが必要です。\n- String g = 'a'; は、'a'はchar型リテラルなのでStringには代入できません。\n\nこのように、Javaの型変換やリテラルのルールを理解しているかが問われる問題です。",
        },
        {
            id: 56,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String[][] array = {\n 4.             { "A", "B" },\n 5.             { "C" },\n 6.             { "D", "E", "F", "G" }\n 7.         };\n 8.         for (int i = 0; i < array.length; i++) {\n 9.             int j = 0;\n10.             for (; j < array[i].length; j++) {\n11.                 System.out.print("[" + i + "," + j + "]=" + array[i][j] + " ");\n12.             }\n13.         }\n14.     }\n15. }',
            choices: [
                "<code>[0,0]=A [0,1]=B [1,0]=C [1,1]=D [2,0]=E [2,1]=F [2,2]=G </code>",
                "<code>[0,0]=A [0,1]=B [1,0]=C [2,0]=D [2,1]=E [2,2]=F [2,3]=G </code>",
                "<code>[0,0]=A [0,1]=B [1,0]=C [1,1]=D [2,0]=E [2,1]=F [3,0]=G </code>",
                "<code>[0,0]=A [0,1]=B [0,2]=C [1,0]=D [1,1]=E [1,2]=F [1,3]=G </code>",
            ],
            answerIndex: 1,
            explanation:
                'このプログラムは、2次元配列arrayの各要素をfor文で順に出力しています。\n\narrayの構造は次の通りです：\n- 0行目: "A", "B"\n- 1行目: "C"\n- 2行目: "D", "E", "F", "G"\n\nfor文の外側は行（i）、内側は列（j）を回しており、array[i][j]の値を出力します。\n\n出力は、各行・各列の要素が順に\n[0,0]=A [0,1]=B [1,0]=C [2,0]=D [2,1]=E [2,2]=F [2,3]=G\nとなります。\n\nポイント：\n- 2次元配列は行ごとに要素数が異なる場合がある\n- for文でarray[i].lengthを使うことで各行の要素数に合わせてループできる\n\nこのため、正しい出力は「[0,0]=A [0,1]=B [1,0]=C [2,0]=D [2,1]=E [2,2]=F [2,3]=G 」となります。',
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
                "このプログラムはcatchブロックの順序に関する問題です。\n\ncatch(Exception e)の後にcatch(RuntimeException e)が続いていますが、RuntimeExceptionはExceptionのサブクラスです。\nそのため、先にcatch(Exception)で全ての例外が捕捉されてしまい、catch(RuntimeException)には絶対に到達できません。\n\nJavaでは、到達不能なcatchブロックがあるとコンパイルエラーになります。\n\nポイント：\n- catchブロックは、特定の例外型（下位型）を先に、一般的な型（上位型）を後に書く必要がある\n- 到達不能なcatchブロックはコンパイルエラー\n\nこのため、このプログラムはコンパイルエラーとなります。",
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
            explanation:
                "このプログラムは、インクリメント演算子（num++）の動作がポイントです。\n\nif文の条件でnum++ < 10を判定しています。\nnum++は「比較後にnumを1増やす」ため、まずnum（9）と10を比較し、条件はtrueになります。\n比較の後、numは10になります。\n\nそのため、if文の中でSystem.out.println(num);が実行され、出力は「10」となります。\n\nポイント：\n- num++は「比較後にインクリメント」される（後置）\n- if文の条件判定時は元の値で比較される\n- 条件がtrueなので、インクリメント後の値が出力される\n\nこのため、画面には「10」と表示されます。",
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
                'このプログラムは、文字列結合と演算の順序がポイントです。\n\nSystem.out.println(a + b = " = (a + b) = " + a + b);\nは、左から順に評価されます。\n\nまず a + b で 6 となり、\n次に " = (a + b) = " という文字列が結合され、\nその後 a（4）が文字列として結合され、さらに b（2）が結合されます。\n\nつまり、6 = (a + b) = 42 という文字列が出力されます。\n\nポイント：\n- + 演算子は、左から右へ順に評価される\n- 途中で文字列型が現れると、以降はすべて文字列結合になる\n\nこのため、画面には「6 = (a + b) = 42」と表示されます。',
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
                "このプログラムは、型変換（キャスト）と自動ボクシング・アンボクシングの動作がポイントです。\n\n5行目の (long) s1 + s2 は、s1がlong型に変換され、s2（Integer型）は自動的にアンボクシングされてint型となり、\nlong + int の計算結果はlong型となります。これをLong型の変数s3に代入するのは問題ありません。\n\n6行目の (String) (s3 + s2) ですが、s3はLong型、s2はInteger型で、加算結果はlong型です。\nこのlong型の値をString型にキャストすることはできないため、ここでコンパイルエラーとなります。\n\nポイント：\n- プリミティブ型とラッパークラスの自動変換（ボクシング・アンボクシング）\n- 異なる型同士の加算結果の型\n- 不適切なキャストはコンパイルエラー\n\nこのため、6行目でコンパイルエラーが発生します。",
        },
        {
            id: 61,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question: "次のプログラムを実行した結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String s1 = new String("Java");\n 4.         String s2 = "Java";\n 5.         String s3 = s2.intern();\n 6.         System.out.print((s1 == s2) + ", ");\n 7.         System.out.print((s2 == s3) + ", ");\n 8.         System.out.println(s1 == s3);\n 9.     }\n10. }',
            choices: [
                "「false, true, false」と表示される",
                "「true, true, true」と表示される",
                "「true, false, false」と表示される",
                "「true, true, false」と表示される",
                "「false, false, false」と表示される",
            ],
            answerIndex: 0,
            explanation:
                'このプログラムは、Stringの生成方法と==演算子、intern()メソッドの動作がポイントです。\n\ns1はnew String("Java")で生成されるため、ヒープ上の新しいオブジェクトです。\ns2は文字列リテラルなので、文字列プール上の"Java"を参照します。\ns3はs2.intern()で、これも文字列プール上の"Java"を参照します。\n\n==演算子は参照の同一性を比較します。\n- s1 == s2 は、異なるオブジェクトなのでfalse\n- s2 == s3 は、どちらも文字列プール上の同じ"Java"を参照するのでtrue\n- s1 == s3 も、異なるオブジェクトなのでfalse\n\nこのため、出力は「false, true, false」となります。\n\nポイント：\n- new String()は新しいオブジェクトを生成\n- 文字列リテラルやintern()は文字列プールを参照\n- ==は参照の同一性を比較する',
        },
        {
            id: 62,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         char[][] arrays = {{'a', 'd'}, {'b', 'e'}, {'c', 'f'}};\n 4.         for (char[] array : arrays) {\n 5.             for (char c : array) {\n 6.                 System.out.print(c);\n 7.             }\n 8.             System.out.print(\" \");\n 9.         }\n10.     }\n11. }",
            choices: [
                "「ad be cf 」と表示される",
                "「abc def 」と表示される",
                "「a b c d e f 」と表示される",
                "「adb ecf 」と表示される",
            ],
            answerIndex: 0,
            explanation:
                "このプログラムは、2次元char配列を拡張for文で出力しています。\n\n外側のfor文で各行（char[]）を取り出し、内側のfor文でその行の各要素（char）を順に出力します。\n1行ごとにスペースも出力されるため、\n- 1行目: 'a', 'd' → ad\n- 2行目: 'b', 'e' → be\n- 3行目: 'c', 'f' → cf\nとなり、最終的な出力は「ad be cf 」となります。\n\nポイント：\n- 2次元配列の拡張for文の使い方\n- 各行ごとにスペースが入る\n\nこのため、画面には「ad be cf 」と表示されます。",
        },
        {
            id: 63,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int x;\n 4.         int y = 3;\n 5.         if (y > 2) {\n 6.             x = ++y;\n 7.             y = x + 5;\n 8.         } else {\n 9.             y++;\n10.         }\n11.         System.out.println(x + ", " + y);\n12.     }\n13. }',
            choices: [
                "「4, 9」と表示される",
                "「3, 8」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "このプログラムは、変数の初期化に関する問題です。\n\n変数xはif文のブロック内でのみ初期化されています。\nifの条件がtrueの場合はxに値が代入されますが、else側ではxに何も代入されません。\n\nif-else文の外でxを使用しているため、Javaのコンパイラは「xが初期化されていない可能性がある」と判断し、コンパイルエラーとなります。\n\nポイント：\n- ローカル変数は必ず初期化してから使う必要がある\n- if-elseのどちらかで初期化されないパスがあるとエラー\n\nこのため、このプログラムはコンパイルエラーになります。",
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
                "このプログラムにはmainメソッドが3つ定義されていますが、Javaのエントリーポイントとして認識されるのは、\npublic static void main(String[] args) だけです。\n\nコマンドラインからjava Main 1 2 3で実行すると、必ずmain(String[] args)が呼び出されます。\n他のmain(int[] args)やmain(Object[] args)は、エントリーポイントとしては無視されます。\n\nそのため、画面には「C」と表示されます。\n\nポイント：\n- Javaのエントリーポイントはmain(String[] args)のみ\n- 他のシグネチャのmainメソッドは呼び出されない\n- コマンドライン引数はString型の配列として渡される\n\nこのため、正しい出力は「C」となります。",
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
                'このプログラムは、コンストラクタの呼び出し順序がポイントです。\n\nBクラスの引数なしコンストラクタが呼ばれると、最初にthis(4)でB(int)が呼ばれます。\nB(int)の中で4が出力され、B(int)の処理が終わるとB()の残り（System.out.print("3")）が実行され、3が出力されます。\n\nBクラスのコンストラクタの先頭でsuper()が暗黙的に呼ばれ、Aクラスの引数なしコンストラクタが呼ばれます。\nA()の中でthis(2)によりA(int)が呼ばれ、2が出力されます。その後A()の残り（System.out.print("1")）が実行され、1が出力されます。\n\n呼び出しの流れをまとめると、2→1→4→3の順で出力されます。\n\nポイント：\n- コンストラクタの呼び出しは、親クラス→子クラスの順\n- this()やsuper()の使い方\n- 出力の順序は呼び出しの流れに依存\n\nこのため、画面には「2143」と表示されます。',
        },
        {
            id: 66,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question: "次のプログラムの空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     public static void print(Integer num) {\n 3.         System.out.println(num);\n 4.     }\n 5. }\n\n 6. import java.util.List;\n 7. public class Main {\n 8.     public static void main(String[] args) {\n 9.         List<Integer> list = List.of(1, 2, 3);\n10.         list.forEach(＿＿＿＿＿＿＿);\n11.     }\n12. }",
            choices: [
                "<code>new Sample()::print</code>",
                "<code>Sample.print</code>",
                "<code>Sample:print</code>",
                "<code>Sample::print</code>",
            ],
            answerIndex: 3,
            explanation:
                "この問題は、メソッド参照の正しい記法が問われています。\n\nlist.forEach(＿＿＿＿＿＿＿); の部分には、リストの各要素を引数にして呼び出せるメソッド参照を指定します。\n\nSampleクラスのprintメソッドはstaticメソッドなので、\nクラス名::メソッド名（Sample::print）という形式でメソッド参照が可能です。\n\nポイント：\n- staticメソッドの参照は「クラス名::メソッド名」\n- インスタンスメソッドの場合は「インスタンス名::メソッド名」\n- Sample.printやSample:printは正しい記法ではない\n\nこのため、正しい記述はSample::printとなります。",
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
                "JDK（Java Development Kit）は、WindowsやmacOS、Linuxなど、各オペレーティングシステムごとに専用のインストーラが提供されています。\nそのため、自分の使っているOSに合ったJDKを選んでインストールする必要があります。\n\nJavaの開発環境は、JDKをインストールすることでセットアップされます。\nJRE（Java実行環境）は実行のみで、開発にはJDKが必要です。\n\nIDE（統合開発環境）はJDKがインストールされていないとJavaの開発ができません。\n\nポイント：\n- JDKはOSごとに用意されている\n- 開発にはJDKが必要\n- IDEだけではJava開発環境は整わない\n\nこのため、正しい説明は「JDKをインストールするときには、特定のオペレーティングシステム用のJava開発環境をセットアップする」です。",
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
                "この問題は、フィールドへの正しい代入方法と型の一致がポイントです。\n\n・public Sample(String[] array) { this.array = array; }\n引数のarrayはString[]型で、フィールドarrayもString[]型なので、そのまま代入できます。\n\n・public Sample(String... array) { this.array = array; }\n可変長引数（String...）は実体としてString[]型になるため、フィールドにそのまま代入できます。\n\n【不正解の選択肢のポイント】\n- パラメータに自己代入しているだけでフィールドが更新されないもの\n- String型やObject[]型はString[]型に直接代入できない\n\nポイント：\n- フィールドと引数の型が一致しているか\n- 可変長引数はString[]として扱える\n- this.array = ... でフィールドに代入しているか\n\nこのため、正しいのは「this.array = array;」で代入している2つです。",
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
                "このプログラムは、無限ループでリストに要素を追加し続けることで、最終的にメモリ不足（OutOfMemoryError）になります。\n\ncatch (RuntimeException e) では、OutOfMemoryErrorは捕捉できません。\nなぜなら、OutOfMemoryErrorはExceptionやRuntimeExceptionのサブクラスではなく、Errorクラスのサブクラスだからです。\n\ncatch (Exception e) も同様にErrorは捕捉できません。\n\nそのため、どちらのcatch節も実行されず、エラーがスローされてプログラムは異常終了します。\n\nポイント：\n- OutOfMemoryErrorはErrorクラスのサブクラス\n- catch (Exception) や catch (RuntimeException) ではErrorは捕捉できない\n- throws宣言がなくてもコンパイルエラーにはならない\n\nこのため、実行時に例外（エラー）がスローされます。",
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
                "Javaのモジュールシステムでmainメソッドを持つクラスを実行する場合、\n--module-pathでモジュールが格納されているディレクトリ（例: mods）を指定し、\n-m オプションで「モジュール名/メインクラス名」の形式で指定します。\n\nこの場合、com.exampleモジュール内のcom.sample.Mainクラスを実行するには、\njava --module-path mods -m com.example/com.sample.Main\nとします。\n\nポイント：\n- --module-pathでモジュールの場所を指定\n- -mで「モジュール名/クラス名」を指定\n- クラスパス指定やクラス名だけではモジュールとして実行できない\n\nこのため、正しいコマンドは「java --module-path mods -m com.example/com.sample.Main」です。",
        },
        {
            id: 71,
            category: "総仕上げ問題①",
            difficulty: "初級",
            question:
                "次のプログラムを実行し、「abcd」と表示したい。「// insert code here」に入るコードとして正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         String[][] array = new String[2][2];\n 4.         array[0][0] = "a";\n 5.         array[0][1] = "b";\n 6.         array[1][0] = "c";\n 7.         array[1][1] = "d";\n 8.         // insert code here\n 9.     }\n10. }',
            choices: [
                "<code>for (int i = 1; i < 2; i++) {\n    for (int j = 1; j < 2; j++) {\n        System.out.print(array[i][j]);\n    }\n}</code>",
                "<code>for (int i = 0; i < 2; ++i) {\n    for (int j = 0; j < i; ++j) {\n        System.out.print(array[i][j]);\n    }\n}</code>",
                "<code>for (String a : array) {\n    for (String b : array) {\n        System.out.println(b);\n    }\n}</code>",
                "<code>for (int i = 0; i < 2; ) {\n    for (int j = 0; j < 2; ) {\n        System.out.print(array[i][j]);\n        j++;\n    }\n    i++;\n}</code>",
            ],
            answerIndex: 3,
            explanation:
                'この問題は、2次元配列の全要素を順に出力するループの書き方がポイントです。\n\n正しい選択肢は、iとjを0から始めて、ループ本体でインクリメントする方法です。\nこのループでは、array[0][0]→array[0][1]→array[1][0]→array[1][1]の順にアクセスし、\n"a" "b" "c" "d"が順に出力され、結果として「abcd」となります。\n\n他の選択肢は、ループ範囲が不足していたり、型不一致や出力が改行付きになるなど、\n全要素を正しく出力できません。\n\nポイント：\n- 2次元配列の全要素を順に出力するには、2重ループでiとjを0から始めて全範囲を回す\n- ループ変数のインクリメント位置に注意\n\nこのため、正しいコードは「for (int i = 0; i < 2; ) { for (int j = 0; j < 2; ) { System.out.print(array[i][j]); j++; } i++; }」です。',
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
                'この問題は、StringBuilder#replaceメソッドの使い方がポイントです。\n\nreplace(start, end, str)は、start以上end未満の範囲をstrで置き換えます。\n\nsb.indexOf("B")は1、sb.indexOf("C")は2なので、\nsb.replace(1, 2, "X")となり、インデックス1（B）だけがXに置き換わります。\n\n結果として、"AXCD"が出力されます。\n\n他の選択肢は、置換範囲が不適切だったり、何も置換されなかったりします。\n\nポイント：\n- replaceは[開始位置, 終了位置)で置換\n- indexOfで正しい範囲を指定する\n\nこのため、正しいコードはsb.replace(sb.indexOf("B"), sb.indexOf("C"), "X");です。',
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
                "この問題は、配列の特定の要素（1, 3, 5）だけを順に出力するfor文の条件がポイントです。\n\n配列arrayのインデックス0, 2, 4の要素を出力すれば、1, 3, 5が表示されます。\n\nint i = 0; i < 5; i += 2\nとすることで、iは0, 2, 4と増加し、array[0], array[2], array[4]が順に出力されます。\n\n他の選択肢は、範囲外アクセスや不要な要素も出力してしまうため不適切です。\n\nポイント：\n- for文の初期値・条件・増分を工夫して必要な要素だけを出力\n- 配列のインデックス範囲に注意\n\nこのため、正しいfor文は「int i = 0; i < 5; i += 2」です。",
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
                'このプログラムは、配列の初期値とnull参照の扱いがポイントです。\n\nString[] str = new String[2]; で作成した配列の各要素は初期値nullです。\n\nfor文の中でstr[i].concat("e" + i);を実行していますが、str[i]はnullなので、\nnullに対してconcatメソッドを呼び出すとNullPointerExceptionが発生します。\n\nこのため、プログラムは実行時に例外がスローされます。\n\nポイント：\n- 参照型配列の初期値はnull\n- nullに対してメソッドを呼び出すとNullPointerException\n- 例外が発生した時点で以降の処理は実行されない\n\nこのため、正しい答えは「実行時に例外がスローされる」です。',
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
                "この問題は、Javaのモジュールシステムにおける依存関係とパッケージ公開の記述方法がポイントです。\n\nモジュールaがモジュールbに依存する場合、module-info.javaで「requires b」と記述します。\nまた、com.sampleパッケージを他のすべてのモジュールからアクセス可能にするには「exports com.sample」と記述します。\n\nimportやexportというキーワードはmodule-info.javaでは使いません。\n\nポイント：\n- requiresで依存モジュールを指定\n- exportsで外部に公開するパッケージを指定\n- importやexportはmodule-info.javaでは使わない\n\nこのため、正しいmodule-info.javaの記述は「requires b;」「exports com.sample;」です。",
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
                "このプログラムは、メソッドのオーバーロードと引数の型の一致がポイントです。\n\nmainメソッドの引数argsはString[]型です。\nnew Main().test(args); で呼び出されるtestメソッドは、\n- test(Object[] array)\n- test(String[] array)\n- test(Object obj)\nの3つが定義されています。\n\nJavaのオーバーロード解決では、最も引数型が一致するメソッドが選ばれます。\nこの場合、test(String[] array)が最も適合するため、「B」が表示されます。\n\nポイント：\n- オーバーロードは引数型が最も一致するものが選ばれる\n- mainの引数はString[]型\n- Object[]やObject型よりString[]型が優先される\n\nこのため、画面には「B」と表示されます。",
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
                "このプログラムは、クラスの継承と型変換（代入）のルールがポイントです。\n\nsubはSubSample型、sampleはSample型です。\nsub = sample; の代入は、スーパークラス（Sample型）からサブクラス（SubSample型）への代入となります。\n\nJavaでは、サブクラス型の変数にスーパークラス型のインスタンスを代入するには明示的なキャストが必要です。\nこのままではコンパイルエラーとなります。\n\nポイント：\n- サブクラス型 ← スーパークラス型 の代入は明示的なキャストが必要\n- 暗黙的な代入はできない\n- 継承関係と型変換のルール\n\nこのため、このプログラムはコンパイルエラーとなります。",
        },
        {
            id: 78,
            category: "総仕上げ問題①",
            difficulty: "中級",
            question:
                "次のプログラムを確認し、Bクラスの4行目の空欄に入るコードとして正しいものを選びなさい。（2つ選択）",
            code: " 1. package ex78.a;\n 2. public abstract class A {\n 3.     protected abstract void test();\n 4. }\n\n 1. package ex78.b;\n 2. import ex78.a.A;\n 3. public class B extends A {\n 4.     __________\n 5. }",
            choices: [
                "<code>public void test() {}</code>",
                "<code>private void test() {}</code>",
                "<code>void test() {}</code>",
                "<code>protected void test() {}</code>",
            ],
            answerIndex: [0, 3],
            explanation:
                "この問題は、抽象メソッドのオーバーライド時のアクセス修飾子がポイントです。\n\nAクラスの抽象メソッドtestはprotectedです。\nサブクラスBでオーバーライドする際、アクセス修飾子は同じprotectedか、より公開範囲の広いpublicにする必要があります。\n\nprivateやデフォルト（package-private）は、protectedよりも公開範囲が狭くなるため、オーバーライドとしては不適切です。\n\nポイント：\n- オーバーライド時は元のアクセス修飾子以上の公開範囲にできる\n- protectedのメソッドはprotectedまたはpublicでオーバーライド可能\n- privateやデフォルトは不可\n\nこのため、正しいのは「public void test() {}」と「protected void test() {}」です。",
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
                "この問題は、Javaのモジュールシステムに関する知識が問われています。\n\n・コマンドラインからモジュールのエクスポート設定（--add-exportsなど）は可能ですが、通常はmodule-info.javaで管理するのが望ましいです。\n\n・Javaの基本API（StringやSystemなど）はjava.baseモジュールに含まれており、すべてのモジュールが自動的に依存します。\n\n・JDKがモジュール化されてもAPI自体が非推奨になったわけではありません。\n\n・アプリケーションはモジュールとして構造化しなくても動作します（従来のクラスパス形式も利用可能）。\n\nポイント：\n- --add-exports等でコマンドラインからエクスポート設定は可能\n- java.baseは全ての基本APIを含む\n- モジュール化は必須ではない\n- APIが非推奨になったわけではない\n\nこのため、正しい説明は「コマンドラインからモジュールのエクスポートを設定することはできるが望ましくない」「Java の基本 API は java.base モジュールにある」です。",
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
                "このプログラムは、2次元配列の各行の長さとループ条件がポイントです。\n\narray[0]は長さ2、array[1]は長さ5ですが、内側のfor文の条件がb < array.length（2）となっており、\n各行の長さではなく外側配列の長さでループしています。\n\nそのため、a=0のときb=0,1はarray[0][0], array[0][1]にアクセスできて問題ありません。\nしかしa=1のときb=0,1はarray[1][0], array[1][1]にアクセスできますが、array[1][2]以降はループしません。\n\n結果として、array[1][2]～array[1][4]はnullのままです。\n出力は「97 98」「99 100 null null null」となります。\n\nポイント：\n- 2次元配列は行ごとに長さが異なる場合がある\n- ループ条件に注意（各行の長さで回すにはarray[a].lengthを使う）\n- 初期化されていない要素はnull\n\nこのため、正しい出力は「97 98\\n99 100 null null null」です。",
        },
    ],
};
