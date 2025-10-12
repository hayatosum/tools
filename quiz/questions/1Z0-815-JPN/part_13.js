const Q_1Z0_815_JPN_13 = {
    prefix: "1Z0-815-JPN",
    part: "13",
    questions: [
        {
            id: 1,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムの7行目の空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: " 1. import java.io.*;\n 2. \n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         try {\n 6.             test(0);\n 7.         } __________\n 8.     }\n 9.     private static void test(int num) throws IOException,\n10.             IndexOutOfBoundsException {\n11.         if (num < 10) {\n12.             throw new FileNotFoundException();\n13.         } else {\n14.             throw new IndexOutOfBoundsException();\n15.         }\n16.     }\n17. }",
            choices: [
                "<code>catch (FileNotFoundException e) { }\ncatch (IndexOutOfBoundsException e) { }</code>",
                "<code>catch (IndexOutOfBoundsException e) { }\ncatch (FileNotFoundException e) { }</code>",
                "<code>catch (FileNotFoundException | IOException e) { }\n</code>",
                "<code>catch (IOException e) { }\n</code>",
                "<code>catch (FileNotFoundException | IndexOutOfBoundsException e) { }\n</code>",
            ],
            answerIndex: 3,
            explanation:
                "複数の例外型を1つのcatchブロックで処理するには、マルチキャッチ構文（|）を使います。\nFileNotFoundExceptionはIOExceptionのサブクラスであり、catch (FileNotFoundException | IOException e) のように書くと、親子関係のある型を同時に指定することになり、コンパイルエラーとなります。\n\ncatch (IOException e) のみで、FileNotFoundExceptionもまとめて捕捉できるため、これが正しい記述です。\n\n例外の型に親子関係がある場合は、マルチキャッチで同時に指定できない点に注意しましょう。",
        },
        {
            id: 2,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "immutableなオブジェクトに関する説明として、正しいものを選びなさい。（3つ選択）",
            code: "",
            choices: [
                "どのメソッドもオーバーライドできない",
                "どのメソッドでもフィールドの値を変更しない",
                "すべてのフィールドをpublicにする",
                "すべてのフィールドをfinalにする",
            ],
            answerIndex: [0, 1, 3],
            explanation:
                "immutable（不変）オブジェクトは、生成後にその状態（フィールドの値）が一切変更されないことが特徴です。\n\nそのため、すべてのフィールドはfinalにし、値の変更を行うメソッドは持ちません。また、外部から直接フィールドにアクセスできないよう、通常はprivateにします。\n\nすべてのメソッドがフィールドの値を変更しないこと、すべてのフィールドがfinalであることが重要なポイントです。\n\npublicフィールドにすると外部から値を変更できてしまうため、これは不適切です。\n\nこのような設計により、immutableオブジェクトはスレッドセーフで安全に利用できます。",
        },
        {
            id: 3,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムのコンパイルエラーを修正する方法として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int a = 10;\n 4.         float b = 10.0f;\n 5.         double c = 20;\n 6.         a = b;\n 7.         b = a;\n 8.         c = b;\n 9.         c = a;\n10.     }\n11. }",
            choices: [
                "6行目を「a = (int) b;」に置き換える",
                "7行目を「b = (float) a;」に置き換える",
                "8行目を「c = (double) b;」に置き換える",
                "9行目を「c = (double) a;」に置き換える",
            ],
            answerIndex: 0,
            explanation:
                "6行目の a = b; は、float型の値をint型の変数に代入しようとしているため、暗黙的な型変換（自動変換）は行われず、コンパイルエラーとなります。\n\nこの場合は明示的なキャスト（a = (int) b;）が必要です。\n\n一方で、int型からfloat型やdouble型、float型からdouble型への代入は自動的に型変換が行われるため、キャストは不要です。\n\nしたがって、6行目を明示的なキャスト付きに修正することで、プログラムは正しくコンパイルできます。",
        },
        {
            id: 4,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question: "次のプログラムの説明として、正しいものを選びなさい。（3つ選択）",
            code: " 1. import java.util.ArrayList;\n 2. import java.util.List;\n 3. public class Trash {\n 4.     List<String> list = new ArrayList<>();\n 5.     protected Trash(String val) {\n 6.         add(val);\n 7.     }\n 8.     public boolean test(String val) {\n 9.         return true;\n10.     }\n11.     public void delete(String val) {\n12.         list.remove(val);\n13.     }\n14.     public final void add(String val) {\n15.         list.add(val);\n16.     }\n17. }\n\n 1. public class CacheTrash extends Trash {\n 2.     private String tmp = null;\n 3.     public CacheTrash() {\n 4.         super(null);\n 5.     }\n 6.     public boolean test(String val) {\n 7.         return list.contains(val);\n 8.     }\n 9.     public void delete(String val) {\n10.         this.tmp = val;\n11.     }\n12.     public void flush() {\n13.         super.delete(tmp);\n14.     }\n15. }",
            choices: [
                "CacheTrashクラスのtestメソッドは常にtrueを返す",
                "CacheTrashクラスのdeleteメソッドは、Trashクラスのdeleteメソッドを呼び出す",
                "CacheTrashクラスのaddメソッドは、引数をlistに追加する",
                "Trashクラスのlistは、Trashクラスのすべてのサブクラスで参照できる",
                "CacheTrashクラスのflushメソッドは、Trashクラスのdeleteメソッドを呼び出す",
                "CacheTrashクラスのコンストラクタは、nullをlistに追加する",
            ],
            answerIndex: [2, 4, 5],
            explanation:
                "addメソッドはfinal指定されているため、サブクラスでオーバーライドできません。そのため、CacheTrashクラスでもaddメソッドは常に引数をlistに追加します。\n\nCacheTrashクラスのflushメソッドでは、super.delete(tmp)を呼び出しており、これは親クラスTrashのdeleteメソッドを実行します。\n\nCacheTrashクラスのコンストラクタでは、super(null)が呼ばれ、Trashクラスのコンストラクタ内でadd(null)が実行されるため、listにnullが追加されます。\n\nlistフィールドはprotectedなので、サブクラスから直接参照できます。\n\nこのように、final・super・protectedの使い方や、コンストラクタの呼び出し順序がポイントです。",
        },
        {
            id: 5,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     private String value;\n 3.     public void setValue(String value) {\n 4.         value = "Hello, " + value;\n 5.     }\n 6.     public String toString() {\n 7.         return value;\n 8.     }\n 9. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample s = new Sample();\n 4.         s.setValue("Java");\n 5.         System.out.println(s.toString());\n 6.     }\n 7. }',
            choices: [
                "「Hello, Java」と表示される",
                "「Hello, null」と表示される",
                "「null」と表示される",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                'setValueメソッドの引数valueはローカル変数であり、メソッド内で\nvalue = "Hello, " + value;\nと代入しても、インスタンス変数（フィールド）のvalueには影響しません。\n\nそのため、Sampleオブジェクトのvalueフィールドは初期値のnullのままとなります。\n\ntoStringメソッドでreturn value;としたとき、nullが返されるため、\nプログラムの出力は「null」となります。\n\nローカル変数とインスタンス変数の区別に注意しましょう。',
        },
        {
            id: 6,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムを確認し、Bクラスの5行目の空欄への記述に関する説明として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. package ex06.a;\n 2. public class A {\n 3.     String a = "A";\n 4.     protected String b = "B";\n 5.     public String c = "C";\n 6. }\n\n 1. package ex06.b;\n 2. import ex06.a.A;\n 3. public class B extends A {\n 4.     public void test() {\n 5.         System.out.println(__________);\n 6.     }\n 7. }',
            choices: [
                "「new B().b;」と「new B().c;」の両方でコンパイルエラーが発生する",
                "「new B().b;」のみでコンパイルエラーが発生する",
                "「new B().a;」のみでコンパイルエラーが発生する",
                "「new B().a;」と「new B().b;」の両方でコンパイルエラーが発生する",
            ],
            answerIndex: 2,
            explanation:
                "Javaのアクセス修飾子には、デフォルト（package-private）、protected、publicがあります。\n\nデフォルト（修飾子なし）は同一パッケージ内からのみアクセス可能です。protectedは、同一パッケージ内またはサブクラスからアクセスできますが、別パッケージのサブクラスからは「サブクラス自身を通じてのみ」アクセスできます。\n\nこの問題では、aはデフォルト修飾子なので別パッケージからはアクセスできません。bはprotectedですが、new B().bのようにサブクラスのインスタンスを通じて直接アクセスすることはできません。cはpublicなのでどこからでもアクセス可能です。\n\nしたがって、「new B().a;」のみがコンパイルエラーとなります。アクセス修飾子の違いと、パッケージ・継承の関係に注意しましょう。",
        },
        {
            id: 7,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         short a = 97;\n 4.         int b = 98;\n 5.         System.out.print((char) a + " ");\n 6.         System.out.print((char) b);\n 7.     }\n 8. }',
            choices: [
                "「a b」と表示される",
                "「a」と表示されたあとに例外が発生する",
                "コンパイルエラーが発生する",
                "ClassCastExceptionがスローされる",
            ],
            answerIndex: 0,
            explanation:
                "short型のaには97、int型のbには98が代入されています。\n\n(char) a と (char) b で、それぞれ数値をchar型にキャストすると、97は文字'a'、98は文字'b'に対応します。\n\nSystem.out.print((char) a + \" \" ); で 'a' と空白が出力され、System.out.print((char) b); で 'b' が出力されます。\n\nそのため、プログラムの出力は「a b」となります。\n\nキャストによる文字コード変換の仕組みに注意しましょう。",
        },
        {
            id: 8,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "BクラスからAクラスのtestメソッドを呼び出すために、Bクラスの空欄に入るコードとして正しいものを選びなさい。（1つ選択）",
            code: " 1. public class A {\n 2.     public void test() {\n 3.         // do something\n 4.     }\n 5. }\n\n 1. public class B extends A {\n 2.     public void test() {\n 3.         __________\n 4.     }\n 5. }",
            choices: [
                "<code>this.test();</code>",
                "<code>public.test();</code>",
                "<code>new.test();</code>",
                "<code>super.test();</code>",
            ],
            answerIndex: 3,
            explanation:
                "BクラスはAクラスを継承しており、testメソッドをオーバーライドしています。\n\nオーバーライドしたメソッドの中から、親クラス（スーパークラス）の同名メソッドを呼び出したい場合は、super.test(); と記述します。\n\nthis.test(); とすると自分自身のtestメソッド（Bクラス側）が再度呼ばれてしまい、無限再帰になる可能性があります。\n\npublicやnewといったキーワードはこの用途では使えません。\n\n親クラスのメソッドを明示的に呼び出すにはsuperを使う、という点がポイントです。",
        },
        {
            id: 9,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question: "次のプログラムを確認し、コンパイルエラーとなる理由を選びなさい。（1つ選択）",
            code: ' 1. public class A {\n 2.     private String value;\n 3.     public String getValue() {\n 4.         return value;\n 5.     }\n 6.     public void setValue(String value) {\n 7.         this.value = value;\n 8.     }\n 9.     public String toString() {\n10.         return getValue();\n11.     }\n12. }\n\n 1. public class B extends A {\n 2.     public void setValue(String value) {\n 3.         super.setValue("[" + value + "]");\n 4.     }\n 5.     public void setValue(String... values) {\n 6.         setValue(test(values));\n 7.     }\n 8.     private String test(String... values) {\n 9.         var sb = new StringBuilder();\n10.         for (String value : values) {\n11.             sb.append(value + ", ");\n12.         }\n13.         return sb.toString();\n14.     }\n15. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         A a = new B();\n 4.         a.setValue(args);\n 5.     }\n 6. }',
            choices: [
                "BのインスタンスをA型で扱ったため",
                "AクラスのtoStringメソッドをBクラスでオーバーライドしていないため",
                "Bクラスのtestメソッドがprivateであるため",
                "BクラスからAクラスのvalueにアクセスできないため",
                "AクラスにはsetValue(String... values)というメソッドがないため",
            ],
            answerIndex: 4,
            explanation:
                "A型の変数aには、Aクラスで定義されたsetValue(String)メソッドしか利用できません。\n\nBクラスでsetValue(String... values)という可変長引数のメソッドを追加していますが、A型の参照からはこのメソッドは見えません。\n\nmainメソッドでa.setValue(args)と呼び出すと、AクラスのsetValue(String)を探します。しかし、argsはString[]型であり、setValue(String)には一致しません。\n\nこのため、メソッド呼び出しが解決できずコンパイルエラーとなります。\n\n参照型によるメソッド解決の仕組みに注意しましょう。",
        },
        {
            id: 10,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムを確認し、Testクラスの何行目でコンパイルエラーが発生するかを選びなさい。（2つ選択）",
            code: ' public class Sample {\n     String name;\n }\n\n 1. import java.util.ArrayList;\n 2. \n 3. public class Test {\n 4.     var sample = new ArrayList<Sample>();\n 5.     public var test() {\n 6.         var sample = new Sample();\n 7.         var samples = new ArrayList<>();\n 8.         samples.add("Java");\n 9.         samples.add("Lambda");\n10.         for (var s : samples) {\n11.             System.out.println(s);\n12.         }\n13.     }\n14. }',
            choices: ["5行目", "10行目", "7行目", "6行目", "4行目"],
            answerIndex: [0, 4],
            explanation:
                "varはローカル変数の宣言にのみ使えるキーワードです。\n\nフィールド（クラスのメンバ変数）やメソッドの戻り値の型としてvarを使うことはできません。\n\nこのプログラムでは、フィールド宣言とメソッドの戻り値型の両方でvarが使われているため、どちらもコンパイルエラーとなります。\n\nvarは必ずローカル変数の宣言でのみ使う、というルールを覚えておきましょう。",
        },
        {
            id: 11,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     private static int num;\n 3.     static {\n 4.         num = 10;\n 5.     }\n 6.     static {\n 7.         num = 20;\n 8.     }\n 9.     static void test(int num) {\n10.         num = num * num;\n11.     }\n12.     public static void main(String[] args) {\n13.         test(num);\n14.         System.out.println(num);\n15.     }\n16. }",
            choices: [
                "10が表示される",
                "20が表示される",
                "100が表示される",
                "400が表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 1,
            explanation:
                "static初期化ブロックは上から順に実行されます。\n\nまずnumに10が代入され、次に20が代入されるため、mainメソッド開始時点でnumは20です。\n\ntestメソッドはint型の引数numを受け取りますが、これはフィールドのnumとは別のローカル変数です。test(num)を呼び出しても、フィールドnumの値は変化しません。\n\nそのため、System.out.println(num);で出力されるのは20となります。\n\nstatic初期化ブロックの動作と、ローカル変数とフィールドの違いに注意しましょう。",
        },
        {
            id: 12,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question: "次のコードのうち、正常にコンパイルされるものを選びなさい。（2つ選択）",
            code: "",
            choices: [
                "<code>var a = {1.0, 2.0, 3.0, 4.0};</code>",
                "<code>var b = new Double{1.0, 2.0, 3.0, 4.0};</code>",
                "<code>var c = new Float[]{1.0F, 2.0F, 3.0F, 4.0F};</code>",
                "<code>var d = new double[]{1.0, 2.0, 3.0, 4.0};</code>",
            ],
            answerIndex: [2, 3],
            explanation:
                "Javaでvarを使って配列を初期化する場合は、必ず new 型名[]{...} の形で型を明示する必要があります。\n\nvar c = new Float[]{1.0F, 2.0F, 3.0F, 4.0F};\nvar d = new double[]{1.0, 2.0, 3.0, 4.0};\nは正しい構文で、正常にコンパイルされます。\n\n一方、var a = {1.0, 2.0, 3.0, 4.0}; のように型を明示しない配列リテラルは使えません。\nまた、var b = new Double{1.0, 2.0, 3.0, 4.0}; も配列を生成する場合は new Double[]{...} と書く必要があり、構文エラーとなります。\n\n配列初期化時の型指定とvarの使い方に注意しましょう。",
        },
        {
            id: 13,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question: "次のプログラムの説明として、正しいものを選びなさい。（1つ選択）",
            code: " 1. package test;\n 2. public class Sample {\n 3.     int a;\n 4.     private int b;\n 5.     protected int c;\n 6.     public int d;\n 7. }\n\n 1. import test.Sample;\n 2. public class Main extends Sample {\n 3.     public static void main(String[] args) {\n 4.         Main s = new Main();\n 5.     }\n 6. }",
            choices: [
                "Mainクラスからはaとdの両方にアクセスできる",
                "Mainクラスからはdのみアクセスできる",
                "Mainクラスからはcとdの両方にアクセスできる",
                "Mainクラスからはa、c、およびdにアクセスできる",
            ],
            answerIndex: 2,
            explanation:
                "Javaのアクセス修飾子には、private、デフォルト（package-private）、protected、publicがあります。\n\nサブクラスはスーパークラスのprotectedおよびpublicメンバにアクセスできます。\n\npackageが異なる場合、デフォルト（修飾子なし）はアクセスできません。privateもアクセス不可です。\n\nしたがって、Mainクラスからアクセスできるのはprotectedのcとpublicのdのみです。\n\nアクセス修飾子と継承の関係に注意しましょう。",
        },
        {
            id: 14,
            category: "総仕上げ問題②",
            difficulty: "上級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.Collection;\n 2. \n 3. public class A {\n 4.     private Collection collection;\n 5.     public void set(Collection collection) {\n 6.         this.collection = collection;\n 7.         System.out.println("A");\n 8.     }\n 9. }\n\n 1. import java.util.Collection;\n 2. public class B extends A {\n 3.     public void set(Collection collection) {\n 4.         super.set(collection);\n 5.         System.out.println("B");\n 6.     }\n 7. }\n\n 1. import java.util.Collection;\n 2. public class C extends B {\n 3.     @Override\n 4.     public void set(Collection collection) {\n 5.         super.super.set(collection);\n 6.         System.out.println("C");\n 7.     }\n 8. }\n\n 1. import java.util.List;\n 2. public class Main {\n 3.     public static void main(String[] args) {\n 4.         new C().set(List.of(1, 2, 3));\n 5.     }\n 6. }',
            choices: [
                "「A」「B」「C」と表示される",
                "「A」「B」と表示される",
                "「A」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 3,
            explanation:
                "Cクラスのsetメソッド内で super.super.set(collection); という記述がありますが、Javaではsuperは1階層上（親クラス）への参照しかできません。\n\nsuper.superという構文は存在せず、これは文法エラーとなります。\n\n親クラス（B）のsetメソッドを呼びたい場合はsuper.set(collection);と書きます。さらにその上のAクラスのsetメソッドを直接呼び出すことはできません（Bクラスでラップするなどの工夫が必要です）。\n\nこのため、Cクラスのsetメソッドの5行目でコンパイルエラーとなり、プログラムは正しくコンパイルできません。\n\nしたがって正解は「コンパイルエラーが発生する」です。",
        },
        {
            id: 15,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムを確認してください。次のプログラムの空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class A {\n 2.     private int num;\n 3.     public A(int num) {\n 4.         this.num = num;\n 5.     }\n 6. }\n\n 1. public class B extends A {\n 2.     private String val;\n 3.     public B(String val, int num) {\n 4.         __________\n 5.     }\n 6. }",
            choices: [
                "<code>this(num);</code>",
                "<code>super(num);</code>",
                "<code>this(val);</code>",
                "<code>super(val);</code>",
                "<code>super();</code>",
            ],
            answerIndex: 1,
            explanation:
                "スーパークラスAにはint型を引数に取るコンストラクタしか定義されていません。\n\nサブクラスBのコンストラクタからスーパークラスのコンストラクタを呼び出すには、super(num); と記述する必要があります。\n\nthis(num); は同じクラス内の別のコンストラクタを呼び出す場合に使いますが、Bクラスにはint型だけを引数に取るコンストラクタはありません。\n\nsuper(val); やsuper(); もAクラスに該当するコンストラクタがないためエラーとなります。\n\nしたがって、正しい記述はsuper(num); です。コンストラクタ呼び出しのルールに注意しましょう。",
        },
        {
            id: 16,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question: "次のプログラムの説明として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. package ex16;\n 2. import java.util.*;\n 3. public class Sample {\n 4.     private List<String> list = List.of("A", "B", "C");\n 5.     public List<String> getList() {\n 6.         return list;\n 7.     }\n 8. }\n\n 1. package ex16;\n 2. public class Main {\n 3.     public static void main(String[] args) {\n 4.         Sample s = new Sample();\n 5.         for (String str : s.getList()) {\n 6.             System.out.println(str);\n 7.         }\n 8.     }\n 9. }',
            choices: [
                "2つのクラスは同じパッケージに属するので、Mainクラスでjava.util.Listをインポートする必要はない",
                "java.util.Listのみがインポートされる",
                "コンパイルするには、Mainクラスでjava.util.Listをインポートしなければならない",
                "java.utilパッケージのすべてのクラスやインターフェースがSampleクラスにインポートされる",
            ],
            answerIndex: 3,
            explanation:
                "Sampleクラスではimport java.util.*;と記述されています。この書き方は、java.utilパッケージに含まれるすべてのクラスやインターフェースをSampleクラス内で利用できるようにするものです。\n\nたとえば、ListやArrayList、HashMapなど、java.utilパッケージ内のさまざまな型を個別にimportしなくても、必要に応じて使うことができます。\n\nこのように、ワイルドカード（*）を使ったimport文は、パッケージ内のすべての型を一括でインポートする仕組みなので、「java.utilパッケージのすべてのクラスやインターフェースがSampleクラスにインポートされる」という説明が正解となります。\n\n一方で、MainクラスではList型を直接使っていないため、Mainクラスでjava.util.Listをimportする必要はありません。また、「java.util.Listのみがインポートされる」という説明は、実際にはワイルドカードによってList以外もインポート対象となるため正確ではありません。さらに、「Mainクラスで必ずimportが必要」とする説明も、MainクラスでList型を直接使っていないので当てはまりません。",
        },
        {
            id: 17,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question: "次のコードのうち、正常にコンパイルされるものを選びなさい。（2つ選択）",
            code: "",
            choices: [
                "<code>int[] array;\narray = new int[] {};</code>",
                "<code>int[] array2 = new int[3];\narray2 = {1, 2, 3};</code>",
                "<code>Double[] array3 = new Double[3] {};\n</code>",
                "<code>int[] array4 = {array4[0], array4[1]};\n</code>",
                "<code>Double[] array5 = {null, 1.0};\n</code>",
            ],
            answerIndex: [0, 4],
            explanation:
                "int[] array; array = new int[] {}; は、配列の宣言と初期化を分けて書いており、newを使えば空配列も作成できるため正しい構文です。\n\nDouble[] array5 = {null, 1.0}; は、配列の宣言と同時に初期化リストを使ってDouble型の配列を作成しており、正しい構文です。\n\nint[] array2 = new int[3]; array2 = {1, 2, 3}; のように、配列の宣言時以外で初期化リスト（= {1, 2, 3}）を使うことはできません。\n\nDouble[] array3 = new Double[3] {}; は、配列の生成時に初期化リストを使う場合は new Double[]{...} のように書く必要があり、この構文は誤りです。\n\nint[] array4 = {array4[0], array4[1]}; は、array4の宣言時点ではarray4[0]やarray4[1]は未定義のため、初期化に使うことはできません。\n\nしたがって、正常にコンパイルされるのは int[] array; array = new int[] {}; と Double[] array5 = {null, 1.0}; です。配列初期化の正しい構文に注意しましょう。",
        },
        {
            id: 18,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムを実行して、「A,B」と表示したい。Mainクラスの空欄に入るコードとして正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     static String header = "A:";\n 3.     private String value = "B";\n 4.     public static String getValue() {\n 5.         return new Sample().value;\n 6.     }\n 7. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample s = new Sample();\n 4.         __________\n 5.     }\n 6. }',
            choices: [
                "<code>System.out.println(Sample.getValue + s.header);</code>",
                "<code>System.out.println(Sample.header + Sample.value);</code>",
                "<code>System.out.println(new Sample().header + new Sample().value);</code>",
                "<code>System.out.println(s.header + Sample.value);</code>",
                "<code>System.out.println(Sample.header + Sample.getValue());</code>",
                "<code>System.out.println(s.header + s.value);</code>",
            ],
            answerIndex: 4,
            explanation:
                'Sample.headerはstaticフィールドなので、クラス名で参照します。\n\nSample.getValue()はstaticメソッドで、Sampleクラスのインスタンスを生成し、そのvalueフィールド（インスタンスフィールド）を返します。\n\nSample.header + Sample.getValue() と記述することで、"A:" + "B" となり、出力は「A:B」となります。\n\nstaticフィールドやstaticメソッドはクラス名で、インスタンスフィールドはオブジェクト経由で参照する点に注意しましょう。',
        },
        {
            id: 19,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int a = 10;\n 4.         int b = 20;\n 5.         int c = b += a / 5;\n 6.         System.out.println(a + b + c);\n 7.     }\n 8. }",
            choices: ["52が表示される", "54が表示される", "38が表示される", "46が表示される"],
            answerIndex: 1,
            explanation:
                "a / 5 は 10 / 5 で 2 になります。\n\nb += a / 5 は b = b + (a / 5) と同じ意味で、b は 20 + 2 で 22 になります。\n\nc = b += a / 5; のような複合代入演算子の式全体の値は、代入後の b の値（22）です。したがって、c にも 22 が代入されます。\n\n最終的に a = 10, b = 22, c = 22 となり、System.out.println(a + b + c); で 10 + 22 + 22 = 54 が出力されます。\n\n複合代入演算子の評価順と式全体の値に注意しましょう。",
        },
        {
            id: 20,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         try {\n 4.             String[] array = new String[5];\n 5.             array[1] = "A";\n 6.             array[2] = "B";\n 7.             array[3] = "C";\n 8.             for (String str : array) {\n 9.                 System.out.println(str);\n10.             }\n11.         } catch (Exception e) {\n12.             System.out.println("Error");\n13.         }\n14.     }\n15. }',
            choices: [
                "「A」「B」「C」と表示される",
                "「null」「A」「B」「C」「null」と表示される",
                "「Error」と表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 1,
            explanation:
                'String型の配列をnew String[5]で生成すると、すべての要素は初期値としてnullが入ります。\n\narray[1]に"A"、array[2]に"B"、array[3]に"C"を代入していますが、array[0]とarray[4]は未代入のままです。\n\nfor文で配列の全要素を順に出力すると、null, A, B, C, null の順で表示されます。\n\n配列の初期値と出力順に注意しましょう。',
        },
        {
            id: 21,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     private int num;\n 3.     private int test() {\n 4.         for (int i = 0; i < 3; i++) {\n 5.             num += i;\n 6.         }\n 7.         return num;\n 8.     }\n 9.     public static void main(String[] args) {\n10.         Sample s = new Sample();\n11.         int num = s.test();\n12.         s.test();\n13.         System.out.println(num);\n14.     }\n15. }",
            choices: [
                "3が表示される",
                "6が表示される",
                "9が表示される",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                "testメソッド内のforループでは、iが0から2まで順に加算されます。\n\nnum += i; の処理で、i=0のときnumは0、i=1のときnumは1、i=2のときnumは3となります。\n\ns.test()の戻り値（3）をローカル変数numに代入し、その値を出力しているため、3が表示されます。\n\nインスタンス変数とローカル変数の違い、ループの加算処理に注意しましょう。",
        },
        {
            id: 22,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "java.langパッケージを含むJava SEの基本的なAPIが提供されているモジュールとして正しいものを選びなさい。（1つ選択）",
            code: "",
            choices: ["classes", "jdk.base", "java.se", "java.base"],
            answerIndex: 3,
            explanation:
                "Java 9以降のモジュールシステムでは、最も基本的なモジュールはjava.baseです。\n\njava.baseモジュールには、java.langパッケージをはじめ、Java SEの基本的なAPIが含まれています。\n\nすべてのJavaアプリケーションで自動的に読み込まれるため、特別な指定をしなくても利用できます。\n\nJavaの標準APIの基盤となるモジュールである点に注意しましょう。",
        },
        {
            id: 23,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. package ex23.a;\n 2. public class A {\n 3.     public int num = 10;\n 4. }\n\n 1. package ex23.b;\n 2. import ex23.a.A;\n 3. public class B extends A {\n 4.     int num = 20;\n 5. }\n\n 1. package ex23;\n 2. import ex23.a.A;\n 3. import ex23.b.B;\n 4. public class Main {\n 5.     public static void main(String[] args) {\n 6.         A a = new B();\n 7.         System.out.println(a.num);\n 8.     }\n 9. }",
            choices: [
                "Bクラスでコンパイルエラーが発生する",
                "Mainクラスでコンパイルエラーが発生する",
                "10が表示される",
                "20が表示される",
            ],
            answerIndex: 2,
            explanation:
                "フィールド（インスタンス変数）はメソッドのようにオーバーライドされず、参照型によってアクセス先が決まります。\n\nA型の変数aからnumにアクセスすると、Aクラスで定義されたnum（10）が参照されます。\n\nBクラスで同名のnumを定義しても、A型の参照からはBクラスのnumにはアクセスできません。\n\nしたがって、出力は10となります。フィールドの隠蔽と参照型によるアクセスの違いに注意しましょう。",
        },
        {
            id: 24,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "publicで修飾されたメソッドをオーバーライドする際に利用できるアクセス修飾子として、正しいものを選びなさい。（1つ選択）",
            code: "",
            choices: ["public", "public、protected", "public、protected、デフォルト", "制限はない"],
            answerIndex: 0,
            explanation:
                "メソッドをオーバーライドする際、元のメソッドよりアクセスレベルを狭めることはできません。\n\npublicで修飾されたメソッドは、サブクラスでも必ずpublicとしてオーバーライドする必要があります。\n\nprotectedやデフォルト（package-private）など、より制限の強い修飾子ではオーバーライドできません。\n\nアクセス修飾子のルールに注意しましょう。",
        },
        {
            id: 25,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. package ex25.a;\n 2. class Sample {\n 3.     public String value;\n 4.     public Sample(String value) {\n 5.         this.value = value;\n 6.     }\n 7. }\n\n 1. package ex25.b;\n 2. import ex25.a.Sample;\n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         Sample s = new Sample("Hello Java");\n 6.         System.out.println(s.value);\n 7.     }\n 8. }',
            choices: [
                "「null」と表示される",
                "「Hello Java」と表示される",
                "何も表示されない",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 3,
            explanation:
                "Sampleクラスはアクセス修飾子が付いていないため、パッケージプライベート（デフォルトアクセス）となります。\n\nパッケージプライベートのクラスは、同じパッケージ内からしか利用できません。\n\nMainクラスは別パッケージにあるため、Sampleクラスを利用しようとするとコンパイルエラーになります。\n\nクラスのアクセス修飾子とパッケージの関係に注意しましょう。",
        },
        {
            id: 26,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     int num;\n 3.     private static void test() {\n 4.         num++;\n 5.         System.out.println(num);\n 6.     }\n 7.     public static void main(String[] args) {\n 8.         Main.test();\n 9.         Main.test();\n10.     }\n11. }",
            choices: [
                "「1」「2」と表示される",
                "1が2回表示される",
                "testメソッドでコンパイルエラーが発生する",
                "mainメソッドでコンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "staticメソッド（test）内で、インスタンス変数numを直接参照しようとするとコンパイルエラーになります。\n\nstaticメソッド内では、同じクラスのstaticなメンバーしか直接アクセスできません。\n\nnumをstaticにするか、Mainクラスのインスタンスを生成してからnumにアクセスする必要があります。\n\nstaticとインスタンスの違いに注意しましょう。",
        },
        {
            id: 27,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         String str = \"abcde\";\n 4.         str.replace('c', 'x');\n 5.         str.substring(2, 4);\n 6.         System.out.println(str);\n 7.     }\n 8. }",
            choices: [
                "「abxde」と表示される",
                "「abcde」と表示される",
                "「cde」と表示される",
                "「xde」と表示される",
            ],
            answerIndex: 1,
            explanation:
                'Stringはimmutable（不変）オブジェクトなので、replaceやsubstringなどのメソッドを呼び出しても、元の文字列自体は変更されません。\n\nこれらのメソッドは新しい文字列を返しますが、その戻り値を変数に代入しない限り、strの値は変わりません。\n\nしたがって、System.out.println(str); で出力されるのは元の "abcde" です。\n\nStringの不変性とメソッドの戻り値の扱いに注意しましょう。',
        },
        {
            id: 28,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムを実行して、1, 2, 3と順に表示したい。空欄に入るコードとして正しいものを選びなさい。（1つ選択）",
            code: " 1. import java.util.List;\n 2. public class Main {\n 3.     public static void main(String[] args) {\n 4.         List<Integer> list = List.of(1, 2, 3);\n 5.         __________\n 6.     }\n 7. }",
            choices: [
                "<code>list.forEach(() -> System.out.println(x));</code>",
                "<code>list.forEach((x) -> System.out.println(x));</code>",
                "<code>list.forEach((x) -> { return x });</code>",
                "<code>list.forEach(list);</code>",
            ],
            answerIndex: 1,
            explanation:
                "forEachメソッドは、コレクションの各要素に対して処理を行うためのメソッドです。\n\nlist.forEach((x) -> System.out.println(x)); のように、ラムダ式で要素xを受け取り、System.out.println(x)を実行する構文が正しいです。\n\nこの記述により、リストの要素1, 2, 3が順に出力されます。\n\nforEachとラムダ式の使い方に注意しましょう。",
        },
        {
            id: 29,
            category: "総仕上げ問題②",
            difficulty: "上級",
            question: "次のプログラムの説明として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     private final int num;\n 3.     public Sample(String str) {\n 4.         this(Integer.parseInt(str));\n 5.     }\n 6.     public Sample(int num) {\n 7.         this.num = num;\n 8.     }\n 9.     public Sample() {\n10.     }\n11.     public int getNum() {\n12.         return this.num;\n13.     }\n14. }",
            choices: [
                "2行目でコンパイルエラーが発生する",
                "4行目でコンパイルエラーが発生する",
                "6行目でコンパイルエラーが発生する",
                "9行目でコンパイルエラーが発生する",
            ],
            answerIndex: 3,
            explanation:
                "finalフィールドは必ず初期化されている必要があります。\n\nこのクラスでは、引数なしコンストラクタ（9行目）内でnumフィールドが初期化されていません。\n\n他のコンストラクタではnumに値が代入されていますが、引数なしコンストラクタでは何も代入されていないため、コンパイルエラーとなります。\n\nfinalフィールドはすべてのコンストラクタで必ず初期化しなければならないというルールに注意しましょう。",
        },
        {
            id: 30,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. interface Function {\n 2.     void process();\n 3. }\n\n 1. class Sample implements Function {\n 2.     protected void process() {\n 3.         System.out.println("A");\n 4.     }\n 5. }\n\n 1. public class Main extends Sample {\n 2.     public void process() {\n 3.         System.out.println("B");\n 4.     }\n 5.     public static void main(String[] args) {\n 6.         Sample s = new Main();\n 7.         Sample s2 = new Sample();\n 8.         test(s);\n 9.         test(s2);\n10.     }\n11.     public static void test(Function f) {\n12.         f.process();\n13.     }\n14. }',
            choices: [
                "「A」「A」と表示される",
                "「B」「A」と表示される",
                "Sampleクラスでコンパイルエラーが発生する",
                "Mainクラスでコンパイルエラーが発生する",
                "SampleクラスとMainクラスの両方でコンパイルエラーが発生する",
            ],
            answerIndex: 2,
            explanation:
                "インターフェースで宣言されたメソッドは、publicでなければなりません。\n\nSampleクラスのprocessメソッドはprotectedとなっており、インターフェースのpublicなメソッドを正しく実装していないため、コンパイルエラーとなります。\n\nインターフェースのメソッドを実装する際は、必ずpublic修飾子を付ける必要がある点に注意しましょう。",
        },
        {
            id: 31,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムを確認し、Bクラスの空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: " 1. import java.util.Collection;\n 2. public class A {\n 3.     private Collection collection;\n 4.     public void set(Collection collection) {\n 5.         this.collection = collection;\n 6.     }\n 7. }\n\n 1. import java.util.Map;\n 2. public class B extends A {\n 3.     public void set(Map<String, String> map) {\n 4.         ________\n 5.     }\n 6. }",
            choices: [
                "<code>set(map.values());</code>",
                "<code>super.set((List<String>) map);</code>",
                "<code>set(super.map);</code>",
                "<code>map.forEach((k, v) -> set(v));</code>",
            ],
            answerIndex: 0,
            explanation:
                "Mapのvalues()メソッドは、Mapに格納されている値のコレクション（Collection）を返します。\n\nAクラスのsetメソッドはCollection型を引数に取るため、super.set(map.values()); のように呼び出すことで、Mapの値の一覧をAクラスのsetメソッドに渡すことができます。\n\n型変換やキャストの必要はなく、values()の戻り値をそのまま渡せる点がポイントです。\n\nメソッド呼び出し時の型の関係に注意しましょう。",
        },
        {
            id: 32,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question: "次の説明のうち、正しいものを選びなさい。（1つ選択）",
            code: "",
            choices: [
                "Javaでは、クラスとインターフェースは多重継承できない",
                "インターフェースでは、抽象メソッドをオーバーライドして実装を提供できる",
                "抽象メソッドをオーバーライドした抽象メソッドでは、戻り値型を変更することはできない",
                "インターフェースを継承したインターフェースでは、抽象メソッドの実装を提供しなければならない",
            ],
            answerIndex: 1,
            explanation:
                "インターフェースでは、抽象メソッドをオーバーライドして実装（デフォルトメソッドやstaticメソッド）を提供することができます。\n\nJavaではクラスは多重継承できませんが、インターフェースは複数継承が可能です。そのため「クラスとインターフェースは多重継承できない」という説明は正しくありません。\n\nまた、抽象メソッドをオーバーライドした場合でも、戻り値の型は共変戻り値（サブタイプ）であれば変更できます。したがって「抽象メソッドをオーバーライドした抽象メソッドでは、戻り値型を変更することはできない」という説明も正確ではありません。\n\nさらに、インターフェースを継承したインターフェースでは、抽象メソッドの実装を提供する必要はなく、実装クラスで実装すれば問題ありません。",
        },
        {
            id: 33,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     public void test(Object[] val) {\n 3.         System.out.println("A");\n 4.     }\n 5.     public void test(long[] val) {\n 6.         System.out.println("B");\n 7.     }\n 8.     public void test(Object val) {\n 9.         System.out.println("C");\n10.     }\n11. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         new Sample().test(new int[3]);\n 4.     }\n 5. }',
            choices: [
                "Aが表示される",
                "Bが表示される",
                "Cが表示される",
                "Sampleクラスでコンパイルエラーが発生する",
                "Mainクラスでコンパイルエラーが発生する",
            ],
            answerIndex: 2,
            explanation:
                "testメソッドにはObject[]型、long[]型、Object型の3つのオーバーロードがあります。\n\nnew int[3]はint型の配列であり、Object[]やlong[]には自動変換されません。\n\nただし、配列はObjectのサブクラスなので、Object型の引数には代入できます。\n\nそのため、test(Object val)が呼び出され、「C」が表示されます。\n\n配列の型とメソッドオーバーロードの解決順に注意しましょう。",
        },
        {
            id: 34,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int[][] array = new int[2][4];\n 4.         array[0] = new int[]{1, 2, 3, 4};\n 5.         array[1] = new int[]{1, 2};\n 6.         for (int[] a : array) {\n 7.             for (int b : a) {\n 8.                 System.out.print(b);\n 9.             }\n10.             System.out.println();\n11.         }\n12.     }\n13. }",
            choices: [
                "「1234」「12」と表示される",
                "「12」「12」と表示される",
                "「12」「1200」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                "2次元配列は、各行ごとに要素数（列数）が異なっても問題ありません。\n\narray[0]には4つの要素（1, 2, 3, 4）、array[1]には2つの要素（1, 2）が格納されています。\n\nfor文で各行の要素を順に出力すると、1 2 3 4 と 1 2 がそれぞれ1行ずつ表示されます。\n\n2次元配列の行ごとの要素数や出力結果に注意しましょう。",
        },
        {
            id: 35,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question: "次の説明のうち、もっとも適切なものを選びなさい。（1つ選択）",
            code: "",
            choices: [
                "Javaの実行環境は、異なるプログラミング言語のコンパイラによってコンパイルされた実行可能ファイルも処理できる",
                "コンパイラはリフレクションを使い、メソッドがターゲットプラットフォームのソースによってサポートされているかどうかをテストする",
                "コンパイラは、特定のプラットフォームで実行するためにクラスを前処理する",
                "実行時に、クラスは必要に応じてロードされる",
            ],
            answerIndex: 3,
            explanation:
                "Javaでは、クラスは実行時に必要に応じて動的にロードされます。\n\nクラスローディング機構により、プログラムの実行中にクラスが初めて使われるタイミングで自動的にロードされる仕組みです。\n\nこのため、すべてのクラスがプログラム開始時に一度にロードされるわけではありません。\n\nJavaの動的クラスローディングの仕組みに注意しましょう。",
        },
        {
            id: 36,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.function.Consumer;\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         final String val = "Hello, Lambda";\n 4.         Consumer<String> func = (val) -> System.out.println(val);\n 5.         func.accept("Hello, Java");\n 6.     }\n 7. }',
            choices: [
                "「Hello, Lambda」と表示される",
                "「Hello, Java」と表示される",
                "何も表示されない",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 3,
            explanation:
                "ラムダ式の仮引数名（val）が、同じスコープの外側で宣言されているローカル変数名（val）と重複しています。\n\nJavaでは、ラムダ式の引数名が外側のローカル変数名と同じ場合、再宣言はできずコンパイルエラーとなります。\n\nこのため、funcの定義部分でエラーとなり、プログラムはコンパイルできません。\n\nラムダ式の仮引数名とスコープ内の変数名の衝突に注意しましょう。",
        },
        {
            id: 37,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String str;\n 4.         test(str);\n 5.     }\n 6.     private static void test(String str) {\n 7.         System.out.println(str);\n 8.     }\n 9. }",
            choices: [
                "「null」と表示される",
                "何も表示されない",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "ローカル変数strは宣言のみで初期化されていません。\n\nJavaでは、ローカル変数は初期化しないと使用できません。\n\ntest(str); の呼び出し時点でstrが未初期化のため、「変数strは初期化されていない可能性があります」というコンパイルエラーになります。\n\nローカル変数の初期化ルールに注意しましょう。",
        },
        {
            id: 38,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int result = 30 - 12 / (2 * 5) + 1;\n 4.         System.out.println(result);\n 5.     }\n 6. }",
            choices: [
                "2が表示される",
                "3が表示される",
                "28が表示される",
                "29が表示される",
                "30が表示される",
            ],
            answerIndex: 4,
            explanation:
                "整数同士の除算は小数点以下が切り捨てられます。\n\n12 / (2 * 5) は 12 / 10 となり、結果は1です。\n\n30 - 1 + 1 の計算をすると、まず30 - 1 = 29、次に29 + 1 = 30 となります。\n\nしたがって、出力は30です。整数除算の切り捨てと演算順序に注意しましょう。",
        },
        {
            id: 39,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         int[] array = { 1, 2, 3, 4, 5 };\n 4.         int key = 3;\n 5.         int cnt = 0;\n 6.         for (int i : array) {\n 7.             if (i != key) {\n 8.                 continue;\n 9.                 cnt++;\n10.             }\n11.         }\n12.         System.out.println(cnt);\n13.     }\n14. }",
            choices: ["3", "2", "1", "コンパイルエラーが発生する"],
            answerIndex: 3,
            explanation:
                "9行目のcnt++は、直前の8行目でcontinue文が実行されるため、絶対に到達しません。\n\nJavaでは、到達不能な文（絶対に実行されないコード）があるとコンパイルエラーになります。\n\nこのため、このプログラムはコンパイルエラーとなります。\n\ncontinue文と到達不能文の関係に注意しましょう。",
        },
        {
            id: 40,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int num = 0;\n 4.         System.out.println(num++ + num + "," + ++num + num);\n 5.     }\n 6. }',
            choices: [
                "「1,22」と表示される",
                "「2,22」と表示される",
                "「2,4」と表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 0,
            explanation:
                "このプログラムでは、num++は後置インクリメントなので、まず0が使われ、その後numが1になります。次にnumをそのまま加えるので、1が加算されて合計1となります。\n\nカンマの後、++numは前置インクリメントなので、numが2になってから値として使われます。最後のnumも2のままなので、2が出力されます。\n\n一見すると「1,4」となりそうですが、実際には「1,22」と表示されます。これは、文字列連結の順序によって、2と2が連続して文字列として結合されるためです。\n\nインクリメント演算子と文字列連結の動作順序に注意しましょう。",
        },
        {
            id: 41,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String[] array = {"A", "B", "C", "D", "E"};\n 4.         for (String str : array) {\n 5.             if ("B".equals(str)) {\n 6.                 continue;\n 7.             }\n 8.             System.out.print(str);\n 9.             if ("C".equals(str)) {\n10.                 break;\n11.             }\n12.         }\n13.     }\n14. }',
            choices: [
                "「A」「C」と表示される",
                "「A」「B」「C」と表示される",
                "「C」「D」と表示される",
                "「C」と表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 0,
            explanation:
                "このプログラムは、配列の各要素を順に処理しています。\n\nループ内で文字列がBの場合はcontinue文でその回の処理をスキップします。\nそのためBは出力されません。\n\nAはそのまま出力され、Cも出力されます。\nCを出力した直後にbreak文でループを終了するため、DやEは出力されません。\n\n結果として「A」「C」と表示されます。\n\ncontinueやbreakの使い方と、ループの流れに注意しましょう。",
        },
        {
            id: 42,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample implements AutoCloseable {\n 2.     @Override\n 3.     public void close() throws Exception {\n 4.         System.out.println("C");\n 5.     }\n 6. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         try (Sample s = new Sample()) {\n 4.             throw new Exception();\n 5.         } catch (Exception e) {\n 6.             System.out.println("A");\n 7.         } finally {\n 8.             System.out.println("B");\n 9.         }\n10.     }\n11. }',
            choices: [
                "「A」「B」「C」と表示される",
                "「A」「C」「B」と表示される",
                "「C」「A」「B」と表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 2,
            explanation:
                "このプログラムはtry-with-resources構文を使っています。\n\ntryブロック内で例外が発生すると、まずリソース（Sample）のclose()メソッドが呼ばれます。\nその後catchブロックが実行され、最後にfinallyブロックが実行されます。\n\nこのため、出力の順番は\n・close()の中のC\n・catchブロックのA\n・finallyブロックのB\nとなります。\n\ntry-with-resourcesのリソース解放タイミングと、catch・finallyの実行順序に注意しましょう。",
        },
        {
            id: 43,
            category: "総仕上げ問題②",
            difficulty: "上級",
            question: "モジュールシステムに関する説明として、正しいものを選びなさい。（2つ選択）",
            code: "",
            choices: [
                "module-info.javaは、module-path内のどこに置いても配置できる",
                "java.baseをエクスポートすると、すべてのコアパッケージがエクスポートされる",
                "利用するモジュールは、module-info.java内で宣言されていなければならない",
                "デフォルトで、モジュール外からモジュールが動作するディレクトリ内にはアクセスができる",
                "module-info.javaは空にはできない",
            ],
            answerIndex: [2, 3],
            explanation:
                "Javaのモジュールシステムでは、利用するモジュールは必ずmodule-info.javaでrequiresとして宣言しなければなりません。\n\nまた、モジュール外からモジュールが動作するディレクトリ内にデフォルトでアクセスすることはできません。\n\nmodule-info.javaの配置場所や内容、エクスポートの仕組みについても注意が必要です。\n\n依存関係の明示とアクセス制御がモジュールシステムの重要なポイントです。",
        },
        {
            id: 44,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. class A {\n 2.     public A() {\n 3.         System.out.print("A");\n 4.     }\n 5. }\n\n 1. class B extends A {\n 2.     public B() {\n 3.         System.out.print("B");\n 4.     }\n 5. }\n\n 1. class C extends B {\n 2.     public C() {\n 3.         System.out.print("C");\n 4.     }\n 5. }\n\n 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         new C();\n 4.     }\n 5. }',
            choices: [
                "「ABC」と表示される",
                "「C」と表示される",
                "「CBA」と表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 0,
            explanation:
                "このプログラムでは、Cクラスのインスタンスを生成すると、まずスーパークラスであるBのコンストラクタが呼ばれます。\nさらにBのスーパークラスであるAのコンストラクタが先に呼ばれます。\n\nそのため、A→B→Cの順でコンストラクタ内のprint文が実行され、結果として「ABC」と表示されます。\n\nJavaでは、サブクラスのコンストラクタから順にスーパークラスのコンストラクタが呼び出される仕組みを理解しておきましょう。",
        },
        {
            id: 45,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムの // insert code here に入るコードとして、正しいものを選びなさい。（3つ選択）",
            code: "public abstract class Item {\n    int num;\n    // insert code here\n}",
            choices: [
                "<code>public void print();\n</code>",
                "<code>public int calculate() {\n    return num * 2;\n}</code>",
                "<code>public abstract int getNum() {\n    return num;\n}</code>",
                "<code>public abstract int test();\n</code>",
                "<code>public static void sample() {\n    // some codes\n}</code>",
            ],
            answerIndex: [1, 3, 4],
            explanation:
                "抽象クラスには、抽象メソッド（abstract修飾子付きで本体のないメソッド）と、通常の本体を持つメソッド（具象メソッド）の両方を定義できます。\n\nstaticメソッドも定義可能です。\n\nただし、抽象メソッドを定義する場合は、メソッド本体（{ ... }）を持たせてはいけません。\n\nこのため、抽象クラスには本体のあるメソッド、抽象メソッド、staticメソッドのいずれも記述できます。\n\n抽象メソッドの定義方法や、staticメソッドの扱いに注意しましょう。",
        },
        {
            id: 46,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         int num = 2;\n 4.         int result = (int) Math.round(Math.pow(3.1, num));\n 5.         System.out.println(result);\n 6.     }\n 7. }",
            choices: [
                "8が表示される",
                "9が表示される",
                "10が表示される",
                "3が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "このプログラムでは、まずMath.pow(3.1, 2)で3.1の2乗（9.61）が計算されます。\n\n次にMath.round(9.61)で四捨五入され、10となります。\n\n最後に(int)でint型に変換されて10が出力されます。\n\n計算の流れと各メソッドの役割をしっかり理解しましょう。",
        },
        {
            id: 47,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のAクラスを継承したサブクラスに定義できるメソッドとして、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class A {\n 2.     public Number test() {\n 3.         return 100;\n 4.     }\n 5. }",
            choices: [
                "<code>@Override\npublic Integer test() {\n    return 0;\n}</code>",
                "<code>@Override\npublic Number test(int num) {\n    return num;\n}</code>",
                "<code>@Override\npublic void test() {\n    // do something\n}</code>",
                "<code>public Number test() throws Exception {\n    return 0;\n}</code>",
            ],
            answerIndex: 0,
            explanation:
                "メソッドをオーバーライドする際は、戻り値の型を元の型のサブクラス型（共変戻り値）にすることができます。\n\n引数の型や数を変えることはできません。また、元のメソッドにない例外を新たにthrowsすることもできません。\n\nこのため、戻り値をInteger型（Numberのサブクラス）にする実装は有効ですが、引数や例外宣言を変えることはできません。\n\nオーバーライドのルールをしっかり理解しましょう。",
        },
        {
            id: 48,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムを実行し、「sample」と表示したい。正しいコマンドを選びなさい。（2つ選択）",
            code: ' 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         System.out.println("sample");\n 4.     }\n 5. }',
            choices: [
                "<code>java Sample.class\n</code>",
                "<code>javac Sample.java\njava Sample.class</code>",
                "<code>java Sample\n</code>",
                "<code>javac Sample.java\njava Sample</code>",
                "<code>java Sample.java\n</code>",
            ],
            answerIndex: [3, 4],
            explanation:
                "Javaプログラムを実行するには、まずソースファイル（Sample.java）をjavacコマンドでコンパイルし、クラスファイル（Sample.class）を作成します。\n\nその後、javaコマンドでクラス名（拡張子なし）を指定して実行します。\n\njavaコマンドで.classや.javaの拡張子を付けて実行することはできません。\n\n正しい手順は、\n・javac Sample.java でコンパイル\n・java Sample で実行\nまたは、すでに.classファイルがある場合は java Sample だけでも実行できます。\n\nコマンドの使い方と拡張子の扱いに注意しましょう。\n\nまた、Java 11以降では、.javaファイルをコンパイルせずに直接javaコマンドで実行することができます。たとえば「java Sample.java」と実行すると、Sample.javaが自動的にコンパイルされ、そのまま実行されます。\n\nこのとき、mainメソッドが正しく定義されていれば、クラスファイルを生成せずにプログラムを実行できます。\n\n従来のようにjavacコマンドでコンパイルしてからjavaコマンドで実行する方法も利用できますが、ソースファイルモードを使うことで、より手軽にJavaプログラムを試すことができます。\n\nこの機能は主に簡単なスクリプトや動作確認に便利です。",
        },
        {
            id: 49,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     int a, b;\n 3.     public Sample(int a, int b) {\n 4.         init(a, b);\n 5.     }\n 6.     public void init(int a, int b) {\n 7.         this.a = a * a;\n 8.         this.b = b * b;\n 9.     }\n10.     public static void main(String[] args) {\n11.         int a = 2, b = 3;\n12.         Sample s = new Sample(a, b);\n13.         System.out.println(a + ", " + b);\n14.     }\n15. }',
            choices: [
                "「4, 9」と表示される",
                "「0, 0」と表示される",
                "「2, 3」と表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 2,
            explanation:
                "mainメソッドで宣言されているaとbは、そのメソッド内だけで使われるローカル変数です。\n\nSampleクラスのインスタンス変数aやbとは別物なので、インスタンス変数の値がどうなっていてもmainメソッド内のa, bには影響しません。\n\n出力しているのはローカル変数a, bの値なので、結果は2, 3となります。\n\nローカル変数とインスタンス変数の区別に注意しましょう。",
        },
        {
            id: 50,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムのコンパイルエラーを修正する方法として、正しいものを選びなさい。（2つ選択）",
            code: " 1. abstract class Sample {\n 2.     protected void doProcess() {}\n 3.     abstract void doTest();\n 4. }\n\n 1. public class Test extends Sample {\n 2.     void doProcess() {}\n 3.     protected void doTest() {}\n 4. }",
            choices: [
                "Sampleクラスの2行目のメソッドをpublicにする",
                "Sampleクラスの3行目のメソッドをpublicにする",
                "Testクラスの2行目のメソッドをpublicにする",
                "Testクラスの2行目のメソッドをprotectedにする",
                "Testクラスの3行目のメソッドをpublicにする",
            ],
            answerIndex: [2, 3],
            explanation:
                "メソッドをオーバーライドする際は、スーパークラスのメソッドよりもアクセス修飾子を狭くすることはできません。\n\nSampleクラスのdoProcessメソッドはprotectedですが、Testクラスでアクセス修飾子なし（デフォルト）にするとアクセスレベルが狭くなりコンパイルエラーとなります。\n\nTestクラス側のdoProcessメソッドをprotectedまたはpublicにすれば、アクセスレベルが同じか広くなり、エラーが解消されます。\n\nアクセス修飾子のルールと、オーバーライド時の注意点を理解しましょう。",
        },
        {
            id: 51,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のコードに記述されている変数valのデータ型として、正しいものを選びなさい。（1つ選択）",
            code: "var list = new ArrayList<>();\nlist.forEach(val -> System.out.println(val));",
            choices: ["String", "ArrayList", "Object", "var"],
            answerIndex: 2,
            explanation:
                "ジェネリクス指定のないArrayListは、要素型がObjectとして扱われます。\n\nそのため、list.forEach(val -> ...) のvalもObject型として推論されます。\n\nラムダ式の変数型は、コレクションの要素型に従って自動的に決まる点に注意しましょう。",
        },
        {
            id: 52,
            category: "総仕上げ問題②",
            difficulty: "上級",
            question:
                "次のプログラムを実行して「0」と表示したい。Mainクラスの空欄に入るコードとして正しいものを選びなさい。（3つ選択）",
            code: " 1. class Test {\n 2.     public int num;\n 3.     public Test(int num) {\n 4.         this.num = num;\n 5.     }\n 6.     public int getNum() {\n 7.         return num;\n 8.     }\n 9.     public void modify(int x) {\n10.         num += x;\n11.     }\n12. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Test t = new Test(100);\n 4.         __________\n 5.         System.out.println(t.getNum());\n 6.     }\n 7. }",
            choices: [
                "<code>this.num = 0;</code>",
                "<code>num = 0;</code>",
                "<code>t(0);</code>",
                "<code>t.num = 0;</code>",
                "<code>t.getNum() = 0;</code>",
                "<code>t.modify(0);</code>",
                "<code>t.modify(-t.num);</code>",
                "<code>t.modify(-t.getNum());</code>",
            ],
            answerIndex: [3, 6, 7],
            explanation:
                "Testクラスのインスタンスtのnumを0にするには、直接代入（t.num = 0;）や、modifyメソッドを使って値を加算・減算する方法があります。\n\n例えば、t.modify(-t.num) や t.modify(-t.getNum()) は、現在のnumの値を打ち消して0にできます。\n\ngetNum()は値を返すだけなので、getNum() = 0 のような代入はできません。\n\nインスタンス変数の直接操作と、メソッドを使った値の変更方法の違いに注意しましょう。",
        },
        {
            id: 53,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     private String val;\n 3.     private int num;\n 4.     public Main(int num) {\n 5.         this.num = num;\n 6.     }\n 7.     public void Main() {\n 8.         val = "test";\n 9.         num = 10;\n10.     }\n11.     public static void main(String[] args) {\n12.         Main m = new Main(20);\n13.         System.out.println(m.val + ", " + m.num);\n14.     }\n15. }',
            choices: [
                "「null, 20」と表示される",
                "「test, 20」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                "MainクラスにはMainという名前のメソッドがありますが、戻り値（void）があるためコンストラクタではなく通常のメソッドです。\n\nこのメソッドは自動的には呼ばれません。\n\nそのためvalは初期値のnullのまま、numはコンストラクタで20が代入されてそのままです。\n\nコンストラクタと同名のメソッドの違い、初期値の扱いに注意しましょう。",
        },
        {
            id: 54,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question: "次の中から、インターフェースに記述できるコードを選びなさい。（2つ選択）",
            code: "",
            choices: [
                "<code>public String methodA();\n</code>",
                "<code>final void methodB();\n</code>",
                '<code>public void methodC() {\n    System.out.println("C");\n}</code>',
                "<code>public int d;\n</code>",
                "<code>public abstract void methodE();\n</code>",
                "<code>private abstract void methodF();\n</code>",
                '<code>final void methodG() {\n    System.out.println("G");\n}</code>',
            ],
            answerIndex: [0, 4],
            explanation:
                "インターフェースに記述できるメソッドは、暗黙的にpublic abstractとなります。\n\nそのため、public String methodA(); や public abstract void methodE(); のような宣言が可能です。\n\n本体付きメソッド（defaultやstatic、private）はJava 8以降で例外的に許可されていますが、finalやabstractとの併用はできません。\n\nまた、フィールドはpublic static finalのみ許可され、単なるpublic int d;のような宣言はできません。\n\nインターフェースのメソッド・フィールドのルールをしっかり理解しましょう。",
        },
        {
            id: 55,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. interface A {\n 2.     public void sample();\n 3. }\n\n 1. interface B extends A {\n 2.     public void test();\n 3. }\n\n 1. abstract class C implements B {\n 2.     public void test() {\n 3.         System.out.println("A");\n 4.     }\n 5. }\n\n 1. class D extends C {\n 2.     public void test() {\n 3.         System.out.println("B");\n 4.     }\n 5. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         C c = new D();\n 4.         c.test();\n 5.     }\n 6. }',
            choices: [
                "「A」と表示される",
                "「B」と表示される",
                "Bインタフェースでコンパイルエラーが発生する",
                "Cクラスでコンパイルエラーが発生する",
                "Dクラスでコンパイルエラーが発生する",
            ],
            answerIndex: 4,
            explanation:
                "BインターフェースはAインターフェースを継承しているため、sampleメソッドも継承されます。\n\n抽象クラスCはtestメソッドだけを実装していますが、sampleメソッドは未実装のままです。\n\n具象クラスDは、すべての抽象メソッド（この場合はsample）を実装しなければなりませんが、実装していないためコンパイルエラーとなります。\n\nインターフェースの継承と、具象クラスでの実装義務に注意しましょう。",
        },
        {
            id: 56,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときに正しい出力を選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int a = 4;\n 4.         int b = 8;\n 5.         int c = b += a / 2;\n 6.         System.out.println(a + ", " + b + ", " + c);\n 7.     }\n 8. }',
            choices: [
                "「4, 10, 8」と表示される",
                "「4, 10, 10」と表示される",
                "「4, 10, 6」と表示される",
                "「4, 12, 6」と表示される",
            ],
            answerIndex: 1,
            explanation:
                "a / 2 は 4 / 2 で 2 になります。\n\nb += a / 2 は b = b + (a / 2) と同じ意味なので、b は 8 + 2 で 10 になります。\n\nc = b += a / 2 のような複合代入式では、式全体の値は代入後のbの値（10）です。\n\nそのため、a = 4, b = 10, c = 10 となり、出力は「4, 10, 10」となります。\n\n複合代入演算子の評価順序と、式全体の値の扱いに注意しましょう。",
        },
        {
            id: 57,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムの空欄に入るコードとして正しいものを選びなさい。なお、ex57.b.Sample クラスのパスは /bin/ex57/b/Sample.class である。（1つ選択）",
            code: " 1. package ex57.a;\n 2. \n 3. __________\n 4. \n 5. public class Main {\n 6.     public static void main(String[] args) {\n 7.         Sample s = new Sample();\n 8.     }\n 9. }",
            choices: [
                "<code>import ex57.b.Sample;</code>",
                "<code>import ex57.b;</code>",
                "<code>import bin.ex57.b.Sample;</code>",
                "<code>import bin.ex57.b.*;</code>",
            ],
            answerIndex: 0,
            explanation:
                "Javaで他のパッケージのクラスを使う場合は、import文でパッケージ名とクラス名を正しく指定する必要があります。\n\nファイルシステム上のパス（binなど）はimport文には使いません。\n\nこの場合、ex57.bパッケージ内のSampleクラスを使うので、import ex57.b.Sample; と記述します。\n\nimport文の書き方とパッケージ指定のルールに注意しましょう。",
        },
        {
            id: 58,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         String a = "A";\n 4.         a = a.concat("B");\n 5.         String b = "C";\n 6.         a = a.concat(b);\n 7.         a.replace(\'C\', \'D\');\n 8.         a = a.concat(b);\n 9.         System.out.println(a);\n10.     }\n11. }',
            choices: [
                "「ABCD」と表示される",
                "「ACD」と表示される",
                "「ABCC」と表示される",
                "「ABD」と表示される",
                "「ABDC」と表示される",
            ],
            answerIndex: 2,
            explanation:
                "String型はイミュータブル（不変）なオブジェクトなので、replaceやconcatなどのメソッドを呼び出しても、元の文字列は変化しません。\n\n7行目のreplaceは結果を変数に代入していないため、aの値は変わりません。\n\nそのため、aは最終的に「ABCC」となり、これが出力されます。\n\nStringのイミュータブル性と、メソッドの戻り値の扱いに注意しましょう。",
        },
        {
            id: 59,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行した結果として正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         int num = 10;\n 4.         Integer val = Integer.valueOf(10);\n 5.         System.out.println(num == val);\n 6.     }\n 7. }",
            choices: [
                "trueが表示される",
                "falseが表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                "int型とInteger型を==で比較すると、Integerが自動的にintに変換（アンボクシング）されて値同士の比較になります。\n\nこの場合、どちらも10なのでtrueが表示されます。\n\nオートボクシング・アンボクシングと==演算子の動作に注意しましょう。",
        },
        {
            id: 60,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "Bクラス内からAクラスにアクセスするコードとして、正しいものを選びなさい。（1つ選択）",
            code: "package sample;\npublic class A {\n    // ...\n}\n\npackage sample.sub;\npublic class B {\n    // ...\n}",
            choices: [
                "<code>String val = sample.A.getVal();</code>",
                "<code>import sample.*;</code>",
                "<code>import sample.sub.*;</code>",
                "<code>String val = A.getVal();</code>",
            ],
            answerIndex: 0,
            explanation:
                "異なるパッケージにあるクラスを参照する場合は、パッケージ名を含めてクラスを指定する必要があります。\n\nこの場合、BクラスからAクラスのメソッドを呼び出すには sample.A.getVal() のように記述します。\n\nimport文を使う場合も、正しいパッケージ名とクラス名を指定することが重要です。\n\nパッケージをまたいだクラスの参照方法に注意しましょう。",
        },
        {
            id: 61,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、以下のコマンドで実行した結果として正しいものを選びなさい。（1つ選択）",
            code: '> java Sample a b c\n\n 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         for (int i = 0; i < args.length; i++) {\n 4.             System.out.println(args[i]);\n 5.             switch(args[i]) {\n 6.                 case "a":\n 7.                     continue;\n 8.                 case "b":\n 9.                     i--;\n10.                     continue;\n11.                 default:\n12.                     break;\n13.             }\n14.         }\n15.     }\n16. }',
            choices: [
                "「a」「b」「c」と表示される",
                "無限ループになる",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                'このプログラムでは、コマンドライン引数を順に出力しながらswitch文で分岐しています。\n\ncase "b" でi--としているため、iの値が減り、次のループでも再び同じ"b"がargs[i]として処理されます。\n\nこのため、iが進まず"b"が何度も繰り返され、無限ループになります。\n\nswitch文内でループ変数を変更する場合は、ループが終了しなくなる可能性に注意しましょう。',
        },
        {
            id: 62,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         Test a = new Test();\n 4.         Test b = new Test();\n 5.         a.sample();\n 6.         b.sample();\n 7.         System.out.println(a.value + ", " + b.value);\n 8.     }\n 9. }\n\n 1. class Test {\n 2.     static int value = 0;\n 3.     int count = 0;\n 4.     public void sample() {\n 5.         while(count < 5) {\n 6.             count++;\n 7.             value++;\n 8.         }\n 9.     }\n10. }',
            choices: [
                "「10, 10」と表示される",
                "「5, 5」と表示される",
                "「5, 10」と表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 0,
            explanation:
                "valueはstatic変数なので、すべてのTestインスタンスで値が共有されます。\n\na.sample()でvalueが5増え、b.sample()でもさらに5増えて合計10になります。\n\ncountはインスタンスごとに管理されるため、aとbで別々に5回ずつループします。\n\nそのため、a.valueもb.valueも10となり、出力は「10, 10」となります。\n\nstatic変数とインスタンス変数の違い、値の変化の流れに注意しましょう。",
        },
        {
            id: 63,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムを実行して「54321」と表示したい。空欄に入るコードとして正しいものを選びなさい。（2つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int[] array = {1, 2, 3, 4, 5};\n 4.         int x = array.length;\n 5.         __________\n 6.     }\n 7. }",
            choices: [
                "<code>while(0 <= x) {\n    System.out.println(array[x]);\n    x--;\n}</code>",
                "<code>do {\n    x--;\n    System.out.println(array[x]);\n} while(0 <= x);</code>",
                "<code>do {\n    System.out.println(array[x]);\n    x--;\n} while(0 <= x);</code>",
                "<code>while(0 < x) {\n    x--;\n    System.out.println(array[x]);\n}</code>",
                "<code>while(0 < x) {\n    System.out.println(array[--x]);\n}</code>",
            ],
            answerIndex: [3, 4],
            explanation:
                "配列の末尾（5番目）から先頭（1番目）に向かって出力するには、インデックスを大きい方から小さい方へ減らしながら出力します。\n\nwhileやdo-while文でxをデクリメントし、array[x]を出力することで「54321」となります。\n\nインデックスの範囲（0以上、length未満）やデクリメントのタイミングに注意しましょう。",
        },
        {
            id: 64,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         var i = 3;\n 4.         var j = 2;\n 5.         i += (j * 2 + j) / i - 2;\n 6.         System.out.println(i);\n 7.     }\n 8. }",
            choices: ["9が表示される", "6が表示される", "3が表示される", "12が表示される"],
            answerIndex: 2,
            explanation:
                "j * 2 + j は 2 * 2 + 2 で 6 になります。\n\n(i += (j * 2 + j) / i - 2) の計算は、まず (j * 2 + j) / i を計算します。\n6 / 3 で 2 です。\n\n次に 2 - 2 で 0 となり、i += 0 なので i は 3 のままです。\n\nしたがって、System.out.println(i); の出力は「3」となります。\n\n計算の順序と、変数の値の変化に注意しましょう。",
        },
        {
            id: 65,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行した結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         int a = 2;\n 4.         int b = 1;\n 5.         if (a++ > ++b) {\n 6.             System.out.print("A ");\n 7.         } else {\n 8.             System.out.print("B ");\n 9.         }\n10.         System.out.println(a + ":" + b);\n11.     }\n12. }',
            choices: [
                "「A 2:1」と表示される",
                "「A 3:2」と表示される",
                "「B 2:1」と表示される",
                "「B 3:2」と表示される",
            ],
            answerIndex: 3,
            explanation:
                "a++は現在の値（2）を使ってから1増やし、++bは先に1増やしてから値（2）を使います。\n\n条件式の評価時点ではa=2, b=2となり、2 > 2はfalseです。\n\nその後aは3、bは2となり、else側の処理が実行されて「B 3:2」と表示されます。\n\nインクリメント演算子の前置・後置の違いと、条件式の評価順序に注意しましょう。",
        },
        {
            id: 66,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. class Item {\n 2.     String name;\n 3.     public Item(String name) {\n 4.         this.name = name;\n 5.     }\n 6. }\n\n 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         Item[] items = new Item[3];\n 4.         items[1] = new Item("A");\n 5.         items[2] = new Item("B");\n 6.         for (Item item : items) {\n 7.             System.out.println(item.name);\n 8.         }\n 9.     }\n10. }',
            choices: [
                "<code>A\nB</code>",
                "<code>null\nA\nB</code>",
                "コンパイルエラーが発生する",
                "ArrayIndexOutOfBoundsExceptionがスローされる",
                "NullPointerExceptionがスローされる",
            ],
            answerIndex: 4,
            explanation:
                "Item型の配列をnew Item[3]で生成すると、各要素は初期値としてnullが入っています。\n\nitems[1]とitems[2]にはItemオブジェクトが代入されていますが、items[0]はnullのままです。\n\nfor文で配列の全要素を順に取り出し、item.nameを出力しようとすると、最初のループでitemがnullのためitem.nameの参照時にNullPointerExceptionが発生します。\n\n配列の初期値とnull参照の扱いに注意しましょう。",
        },
        {
            id: 67,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "Javaが高いパフォーマンスを実現していることと関連する説明として、もっとも適切なものを選びなさい。（1つ選択）",
            code: "",
            choices: [
                "Javaの標準ライブラリは、パイプライン処理を行うための組み込み関数を持っている",
                "Javaは頻繁に実行されるコードを監視して、実行を最適化する",
                "Javaはガーベジコレクションをアプリケーションのコードよりも優先して処理する",
                "Javaは自動的にコードを並列処理する",
            ],
            answerIndex: 1,
            explanation:
                "Javaでは、JIT（Just-In-Time）コンパイラが頻繁に実行される部分のコードを検出し、ネイティブコードに変換して最適化します。\n\nこれにより、繰り返し実行される処理が高速化され、高いパフォーマンスを実現しています。\n\nJITコンパイラの仕組みと、Javaのパフォーマンス向上の理由を理解しましょう。",
        },
        {
            id: 68,
            category: "総仕上げ問題②",
            difficulty: "上級",
            question:
                "次のAクラスを継承したサブクラスに定義できるメソッドとして、正しいものを選びなさい。（2つ選択）",
            code: " 1. import java.util.*;\n 2. public class A {\n 3.     public List<Number> test(Set<CharSequence> s) {\n 4.         return null;\n 5.     }\n 6. }",
            choices: [
                "<code>public ArrayList<Integer> test(Set<String> s) { … }</code>",
                "<code>public List<Integer> test(TreeSet<String> s) { … }</code>",
                "<code>public List<Integer> test(Set<String> s) { … }</code>",
                "<code>public List<Object> test(Set<CharSequence> s) { … }</code>",
                "<code>public List<Integer> test(Set<CharSequence> s) { … }</code>",
                "<code>public ArrayList<Number> test(Set<CharSequence> s) { … }</code>",
            ],
            answerIndex: [1, 5],
            explanation:
                "メソッドをオーバーライドする際は、引数の型が元のメソッドと同じかサブタイプ、戻り値の型は元の型かそのサブタイプ（共変戻り値）でなければなりません。\n\nAクラスのtestメソッドは引数がSet<CharSequence>、戻り値がList<Number>です。\n\n例えば、引数がSet<String>（Set<CharSequence>のサブタイプ）、戻り値がList<Integer>（List<Number>のサブタイプ）や、戻り値がArrayList<Number>（List<Number>のサブタイプ）などはオーバーライド可能です。\n\nジェネリクスの型の互換性や、共変戻り値のルールに注意しましょう。",
        },
        {
            id: 69,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String[] array = {"A", "B"};\n 4.         int i = 0;\n 5.         while (i < array.length) {\n 6.             int j = 0;\n 7.             do {\n 8.                 ++j;\n 9.             } while (j < array[i].length());\n10.             System.out.println(array[i] + ":" + j);\n11.             i++;\n12.         }\n13.     }\n14. }',
            choices: [
                "<code>A:2\nB:2</code>",
                "<code>A:1\nB:3</code>",
                "<code>A:1\nB:1</code>",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                'do-while文は、条件に関係なく必ず1回は実行されます。\n\nこのプログラムでは、配列arrayの各要素（"A"と"B"）のlength()はどちらも1です。\n\njは0から始まり、++jで1になった時点でj < array[i].length()（1 < 1）は偽となるため、ループは1回だけ実行されます。\n\nそのため、出力は「A:1」「B:1」となります。\n\ndo-while文の動作と、変数の値の変化に注意しましょう。',
        },
        {
            id: 70,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムの // insert code here に入るコードとして、正しいものを選びなさい。",
            code: 'public class Sample {\n    public static void main(String[] args) {\n        // insert code here\n        array[0] = 2;\n        array[1] = 3;\n        System.out.println(array[0] + "," + array[1]);\n    }\n}',
            choices: [
                "<code>int[] array = new int[2];</code>",
                "<code>int[] array; array = int[2];</code>",
                "<code>int array = new int[2];</code>",
                "<code>int array[2];</code>",
            ],
            answerIndex: 0,
            explanation:
                "Javaで配列を使うには、int[] array = new int[2]; のように、型・変数名・new・配列の長さをセットで記述する必要があります。\n\n他の選択肢は、配列の宣言や生成の構文が誤っているためエラーになります。\n\n配列の宣言と生成の正しい書き方をしっかり覚えましょう。",
        },
        {
            id: 71,
            category: "総仕上げ問題②",
            difficulty: "上級",
            question:
                "次のプログラムのコンパイルエラーを修正する方法として、正しいものを選びなさい。（2つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         try {\n 4.             if (args.length == 0) {\n 5.                 sample(null);\n 6.             } else {\n 7.                 sample(args[0]);\n 8.             }\n 9.         } catch (RuntimeException e) {\n10.             System.out.println("error");\n11.         }\n12.     }\n13.     private static void sample(String str) {\n14.         if (str == null) throw new Exception();\n15.         throw new RuntimeException();\n16.     }\n17. }',
            choices: [
                "mainメソッドの宣言にthrows RuntimeExceptionを追加する",
                "sampleメソッドの宣言にthrows Exceptionを追加する",
                "sampleメソッドにExceptionを捕捉するcatchブロックを追加する",
                "mainメソッドのcatchブロックでExceptionを捕捉するように修正する",
            ],
            answerIndex: [1, 3],
            explanation:
                "このプログラムでは、sampleメソッドの中でException（チェック例外）をthrowしています。\n\nJavaでは、チェック例外をスローする場合、そのメソッドの宣言にthrows Exceptionのように明示的に書く必要があります。これがないとコンパイルエラーになります。\n\nまた、mainメソッドのcatchブロックでRuntimeExceptionしか捕捉していないため、Exception型の例外が発生した場合に対応できません。catch(Exception e)のようにcatchブロックの型を広げることで、すべての例外を捕捉できるようになります。\n\nこのように、チェック例外をスローする場合はthrows宣言が必要であり、catchブロックの型にも注意しましょう。",
        },
        {
            id: 72,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。",
            code: " 1. public class Sample {\n 2.     public static final int length = 3;\n 3.     public static void main(String[] args) {\n 4.         int[] array = new int[length];\n 5.         for (int i = 0; i < 3; i++) {\n 6.             System.out.print(array[i]);\n 7.         }\n 8.         System.out.println();\n 9.         Integer[] array2 = new Integer[length];\n10.         for (int i = 0; i < 3; i++) {\n11.             System.out.print(array2[i]);\n12.         }\n13.     }\n14. }",
            choices: [
                "<code>nullnullnull\n000</code>",
                "<code>000\n000</code>",
                "<code>000\nnullnullnull</code>",
                "<code>nullnullnull\nnullnullnull</code>",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "int型の配列は、生成時にすべての要素が0で初期化されます。\n\n一方、Integer型の配列は参照型なので、初期値はすべてnullになります。\n\nそのため、int配列を出力すると000、Integer配列を出力するとnullnullnullとなります。\n\nプリミティブ型と参照型の配列の初期値の違いに注意しましょう。",
        },
        {
            id: 73,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         System.out.println("result=" + 2 + 3 + 4);\n 4.         System.out.println("result=" + 2 + 3 * 4);\n 5.     }\n 6. }',
            choices: [
                "<code>result=9\nresult=24</code>",
                "<code>result=9\nresult=20</code>",
                "<code>result=234\nresult=212</code>",
                "<code>result=212\nresult=212</code>",
            ],
            answerIndex: 2,
            explanation:
                "文字列と数値を+演算子で連結すると、左から順に文字列連結が行われます。\n\n1行目は「result=」+ 2 で「result=2」、さらに+3で「result=23」、さらに+4で「result=234」となります。\n\n2行目は「result=」+ 2 で「result=2」、その後3*4が先に計算されて12、+12で「result=212」となります。\n\n文字列連結と演算の優先順位に注意しましょう。",
        },
        {
            id: 74,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question: "次のコードを確認し、trueを返すコードとして正しいものを選びなさい。",
            code: "char[][] array1 = {{'a', 'b'}, {'c', 'd'}};\nchar[][] array2 = array1.clone();\nchar[] array3 = array1[1].clone();",
            choices: [
                "<code>array1[1] == array3</code>",
                "<code>array1[1] == array3[1]</code>",
                "<code>array1[1] == array2[1]</code>",
                "<code>array1.equals(array2)</code>",
            ],
            answerIndex: 2,
            explanation:
                "この問題では、2次元配列array1をclone()メソッドでコピーしてarray2を作っています。clone()は配列自体は新しく作りますが、中身の配列（array1[0]やarray1[1]）は元の配列と同じ参照になります。\n\nそのため、array1[1]とarray2[1]は同じ配列を指しているので、array1[1] == array2[1]はtrueになります。\n\n一方、array1[1] == array3は、array3がarray1[1]のclone()で新しく作られた配列なのでfalseです。また、array1[1] == array3[1]は、array1[1]は配列、array3[1]はchar型の値なので、型が異なり比較できません。\n\narray1.equals(array2)は、配列同士のequalsは参照の比較になるため、異なる配列同士ではfalseになります。\n\nこのように、配列のclone()は「浅いコピー」になること、参照の比較と値の比較の違い、equalsの動作に注意しましょう。",
        },
        {
            id: 75,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のSampleクラスに、引数で受け取った値でフィールドvalueを変更するメソッドを追加したい。メソッドの定義として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     private String value;\n 3. }",
            choices: [
                "<code>public void setValue(String value) {\n    value = value;\n}</code>",
                "<code>public String setValue(String str) {\n    String value = str;\n    return value;\n}</code>",
                "<code>public void setValue(String value) {\n    this.value = value;\n}</code>",
                "<code>public void setValue() {\n    this.value = value;\n}</code>",
            ],
            answerIndex: 2,
            explanation:
                "フィールドの値を変更するには、this.value = value; のようにthisを使ってフィールドに代入する必要があります。\n\n引数名とフィールド名が同じ場合、thisを付けないとローカル変数への代入になってしまいます。\n\n他の選択肢は、フィールドを更新していなかったり、引数がなかったりするため正しいsetterメソッドになりません。\n\nsetterメソッドの書き方とthisの使い方に注意しましょう。",
        },
        {
            id: 76,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムを実行し、「HELLO」と表示したい。空欄に入るコードとして、正しいものを選びなさい。（2つ選択）",
            code: ' 1. import java.util.function.Function;\n 2. \n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         Function<String, String> func = __________;\n 6.         System.out.println(func.apply("hello"));\n 7.     }\n 8. }',
            choices: [
                "<code>String::toUpperCase();</code>",
                "<code>x -> x.toUpperCase();</code>",
                "<code>x:toUpperCase();</code>",
                "<code>x::toUpperCase();</code>",
                "<code>(String x) -> { return x.toUpperCase(); };</code>",
            ],
            answerIndex: [1, 4],
            explanation:
                "Function型には、引数を受け取って値を返すラムダ式やメソッド参照を代入できます。\n\nx -> x.toUpperCase() や (String x) -> { return x.toUpperCase(); } のような書き方が正しいです。\n\n末尾に()が付いているものや、無効なメソッド参照構文は式として使えません。\n\nラムダ式やメソッド参照の正しい書き方に注意しましょう。",
        },
        {
            id: 77,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question: "次のプログラムの説明として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class SampleException extends Exception {}\n\n 1. public class SubSampleException extends SampleException {}\n\n 1. public class Sample {\n 2.     public void test(int num) throws SampleException {\n 3.         if (num < 10) {\n 4.             throw new SubSampleException();\n 5.         }\n 6.     }\n 7. }",
            choices: [
                "testメソッドでは、SampleExceptionクラスか、そのサブクラスであればスローできる",
                "SampleExceptionは非検査例外である",
                "SampleExceptionはプログラムで対処しきれないときに使う例外である",
                "testメソッドでは、SampleExceptionしかスローできないためコンパイルエラーが発生する",
            ],
            answerIndex: 0,
            explanation:
                "この問題は、メソッドのthrows宣言と例外クラスの継承関係について問うものです。\n\ntestメソッドはthrows SampleExceptionと宣言されています。この場合、SampleException自身だけでなく、そのサブクラス（ここではSubSampleException）もスローすることができます。\n\nSampleExceptionはExceptionを継承しているため、チェック例外（検査例外）です。したがって、非検査例外ではありません。\n\nまた、「SampleExceptionしかスローできない」という説明は誤りで、サブクラスもスロー可能です。「プログラムで対処しきれないときに使う例外」という説明も、チェック例外の本質とは異なります。\n\nこのように、throws宣言の型とサブクラスの関係、チェック例外の扱いを正しく理解しましょう。",
        },
        {
            id: 78,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルすると、何行目でコンパイルエラーになるか。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         sample();\n 4.         int a = b;\n 5.         int b = num;\n 6.     }\n 7.     private static void sample() {\n 8.         System.out.println(num);\n 9.     }\n10.     static int num;\n11. }",
            choices: ["3行目", "4行目", "5行目", "8行目"],
            answerIndex: 1,
            explanation:
                "4行目で変数bを参照していますが、bの宣言は5行目なので、この時点ではbは未定義です。\n\nJavaでは、ローカル変数は宣言より前で使うことはできません。\n\n一方、staticフィールドnumはクラス内であればどこからでも参照できます。\n\n変数の宣言順とスコープ、後方参照の可否に注意しましょう。",
        },
        {
            id: 79,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int[] array = {2, 3, 4};\n 4.         int[] array2 = array.clone();\n 5.         array2[0] = 5;\n 6.         for (int i : array) {\n 7.             System.out.println(i);\n 8.         }\n 9.     }\n10. }",
            choices: [
                "「2」「3」「4」と表示される",
                "「5」「3」「4」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                "配列のclone()メソッドを使うと、元の配列と同じ要素を持つ新しい配列が作られます。\n\narray2[0]を変更しても、元のarrayには影響しません。\n\nそのため、arrayの内容は2, 3, 4のまま出力されます。\n\nclone()による複製と、元配列への影響の有無に注意しましょう。",
        },
        {
            id: 80,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int num = 0;\n 4.         String[] array = {"A", "B", "C", "D"};\n 5.         for (String s : array) {\n 6.             switch(s) {\n 7.                 case "D":\n 8.                 case "A":\n 9.                     num -= 1;\n10.                     break;\n11.                 case "B":\n12.                     num++;\n13.                 case "C":\n14.                     num += 2;\n15.             }\n16.         }\n17.         System.out.println(num);\n18.     }\n19. }',
            choices: [
                "3が表示される",
                "4が表示される",
                "-1が表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 0,
            explanation:
                "switch文ではbreakがない場合、次のcaseに処理が続きます。\n\nAの場合はnum -= 1で-1、breakで抜けます。\nBの場合はnum++で1増え、そのままCの処理に進みnum += 2でさらに2増え、合計3増えます。\nCの場合はnum += 2で2増えます。\nDの場合はnum -= 1で-1、breakで抜けます。\n\nすべて合計すると3となり、出力は3です。\n\nswitch文のbreakの有無による処理の流れに注意しましょう。",
        },
    ],
};
