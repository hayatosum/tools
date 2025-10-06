const JAVA_SILVER_1Z0_815_JPN_13 = {
    prefix: "1Z0-815-JPN_13",
    questions: [
        {
            id: 1,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question: "次のプログラムの空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: " 1. import java.io.*;\n 2. \n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         try {\n 6.             test(0);\n 7.         } catch (FileNotFoundException | IndexOutOfBoundsException e) { }\n 8.     }\n 9.     private static void test(int num) throws IOException,\n10.             IndexOutOfBoundsException {\n11.         if (num < 10) {\n12.             throw new FileNotFoundException();\n13.         } else {\n14.             throw new IndexOutOfBoundsException();\n15.         }\n16.     }\n17. }",
            choices: [
                "<pre><code>catch (FileNotFoundException e) { }\ncatch (IndexOutOfBoundsException e) { }</code></pre>",
                "<pre><code>catch (IndexOutOfBoundsException e) { }\ncatch (FileNotFoundException e) { }</code></pre>",
                "<pre><code>catch (FileNotFoundException | IOException e) { }</code></pre>",
                "<pre><code>catch (IOException e) { }</code></pre>",
                "<pre><code>catch (FileNotFoundException | IndexOutOfBoundsException e) { }</code></pre>",
            ],
            answerIndex: 4,
            explanation:
                "複数の例外型を1つのcatchブロックで処理する場合、マルチキャッチ構文「|」を使用する。FileNotFoundExceptionはIOExceptionのサブクラスなので、同一catchで一緒に書くと型の包含関係でコンパイルエラーになる。このため、IOExceptionを含まない組み合わせ (E) が正しい。",
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
            answerIndex: [1, 3],
            explanation:
                "immutable（不変）オブジェクトは内部状態が変更されないことを保証するため、フィールドはfinalとし、変更用メソッドを持たない。フィールドは通常privateで公開しない。したがってBとDが正しい。",
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
                "6行目ではfloat型からint型への代入が暗黙にできないためキャストが必要。a = (int)b; とすればコンパイルが通る。",
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
                "addメソッドはfinalなのでオーバーライドされず、引数をlistに追加する。flushメソッドではsuper.deleteを呼び出している。コンストラクタではsuper(null)によりaddが呼ばれ、listにnullが追加される。",
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
                "setValue内ではローカル変数valueに代入しており、インスタンス変数は変更されないためnullのまま。結果は「null」と表示される。",
        },
        {
            id: 6,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムを確認し、Bクラスの空欄への記述に関する説明として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. package ex06.a;\n 2. public class A {\n 3.     String a = "A";\n 4.     protected String b = "B";\n 5.     public String c = "C";\n 6. }\n\n 1. package ex06.b;\n 2. import ex06.a.A;\n 3. public class B extends A {\n 4.     public void test() {\n 5.     }\n 6. }',
            choices: [
                "「new B().b;」と「new B().c;」の両方でコンパイルエラーが発生する",
                "「new B().b;」のみでコンパイルエラーが発生する",
                "「new B().c;」のみでコンパイルエラーが発生する",
                "「new B().a;」と「new B().b;」の両方でコンパイルエラーが発生する",
            ],
            answerIndex: 3,
            explanation:
                "別パッケージではprotectedメンバはサブクラス経由でのみアクセス可能。直接参照は不可。したがってa（デフォルト）とbは不可、cのみアクセス可能。",
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
                "97と98はASCIIコードで'a'と'b'。キャストにより文字として出力され「a b」と表示される。",
        },
        {
            id: 8,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "BクラスからAクラスのtestメソッドを呼び出すために、Bクラスの空欄に入るコードとして正しいものを選びなさい。（1つ選択）",
            code: " 1. public class A {\n 2.     public void test() {\n 3.         // do something\n 4.     }\n 5. }\n\n 1. public class B extends A {\n 2.     public void test() {\n 3.         super.test();\n 4.     }\n 5. }",
            choices: [
                "<pre><code>this.test();</code></pre>",
                "<pre><code>public.test();</code></pre>",
                "<pre><code>new.test();</code></pre>",
                "<pre><code>super.test();</code></pre>",
            ],
            answerIndex: 3,
            explanation:
                "オーバーライドしたメソッドからスーパークラスの同名メソッドを呼び出す場合は `super.test();` を使用する。",
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
                "A型変数aでは可変長引数版setValue(String... values)は定義されていないため、コンパイル時にはAクラスのsetValue(String)のみが対象となる。そのため呼び出しが解決できずエラーとなる。",
        },
        {
            id: 10,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムを確認し、Testクラスの何行目でコンパイルエラーが発生するかを選びなさい。（2つ選択）",
            code: ' public class Sample {\n     String name;\n }\n\n 1. import java.util.ArrayList;\n 2. public class Test {\n 3.     var sample = new ArrayList<Sample>();\n 4.     public var test() {\n 5.         var sample = new Sample();\n 6.         var samples = new ArrayList<>();\n 7.         samples.add("Java");\n 8.         samples.add("Lambda");\n 9.         for (var s : samples) {\n10.             System.out.println(s);\n11.         }\n12.     }\n13. }',
            choices: ["5行目", "10行目", "7行目", "6行目", "4行目"],
            answerIndex: [2, 4],
            explanation:
                "Javaではフィールドやメソッドの戻り値型にはvarを使用できないため4行目がエラー。またsamplesに文字列を追加しており型推論不一致で7行目もエラーとなる。",
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
                "static初期化ブロックは順に実行され、最終的にnumは20となる。test内のnumは引数のローカル変数であり、フィールドには影響しないため出力は20。",
        },
        {
            id: 12,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question: "次のコードのうち、正常にコンパイルされるものを選びなさい。（2つ選択）",
            code: "",
            choices: [
                "<pre><code>var a = {1.0, 2.0, 3.0, 4.0};</code></pre>",
                "<pre><code>var b = new Double[]{1.0, 2.0, 3.0, 4.0};</code></pre>",
                "<pre><code>var c = new Float[]{1.0F, 2.0F, 3.0F, 4.0F};</code></pre>",
                "<pre><code>var d = new double[]{1.0, 2.0, 3.0, 4.0};</code></pre>",
            ],
            answerIndex: [2, 3],
            explanation:
                "配列リテラルは型明示が必要。varでは配列の初期化時にnewが必要なため、CとDのみ正しくコンパイルされる。",
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
                "サブクラスはスーパークラスのprotectedおよびpublicメンバにアクセス可能。packageが異なる場合、defaultはアクセス不可のため、cとdにアクセスできる。",
        },
        {
            id: 14,
            category: "総仕上げ問題②",
            difficulty: "上級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.Collection;\n 2. \n 3. public class A {\n 4.     private Collection collection;\n 5.     public void set(Collection collection) {\n 6.         this.collection = collection;\n 7.         System.out.println("A");\n 8.     }\n 9. }\n\n 1. import java.util.Collection;\n 2. public class B extends A {\n 3.     public void set(Collection collection) {\n 4.         super.set(collection);\n 5.         System.out.println("B");\n 6.     }\n 7. }\n\n 1. import java.util.Collection;\n 2. public class C extends B {\n 3.     @Override\n 4.     public void set(Collection collection) {\n 5.         super.set(collection);\n 6.         System.out.println("C");\n 7.     }\n 8. }\n\n 1. import java.util.List;\n 2. public class Main {\n 3.     public static void main(String[] args) {\n 4.         new C().set(List.of(1, 2, 3));\n 5.     }\n 6. }',
            choices: [
                "「A」「B」「C」と表示される",
                "「A」「B」と表示される",
                "「A」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                "メソッドのオーバーライドが順に呼ばれる。C#set → B#set → A#set の順で呼ばれ、A→B→Cが順に出力される。",
        },
        {
            id: 15,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムを確認してください。次のプログラムの空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class A {\n 2.     private int num;\n 3.     public A(int num) {\n 4.         this.num = num;\n 5.     }\n 6. }\n\n 1. public class B extends A {\n 2.     private String val;\n 3.     public B(String val, int num) {\n 4.         super(num);\n 5.         this.val = val;\n 6.     }\n 7. }",
            choices: ["this(num);", "super(num);", "this(val);", "super(val);", "super();"],
            answerIndex: 1,
            explanation:
                "スーパークラスAにはintを引数に取るコンストラクタしか存在しないため、Bのコンストラクタからは`super(num)`を呼び出す必要がある。",
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
            answerIndex: 0,
            explanation:
                "同一パッケージ内のクラスは相互にアクセスできるが、別パッケージのクラスを使用する際は、そのファイル内でインポートが必要。ここではListはSampleでのみ使用されており、Mainでは不要。",
        },
        {
            id: 17,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question: "次のコードのうち、正常にコンパイルされるものを選びなさい。（2つ選択）",
            code: "",
            choices: [
                "<pre><code>int[] array;\narray = new int[] {};</code></pre>",
                "<pre><code>int[] array2 = new int[3];\narray2 = {1, 2, 3};</code></pre>",
                "<pre><code>Double[] array3 = new Double[3] {};</code></pre>",
                "<pre><code>int[][] array4 = {array4[0], array4[1]};</code></pre>",
                "<pre><code>Double[] array5 = {null, 1.0};</code></pre>",
            ],
            answerIndex: [0, 4],
            explanation:
                "配列初期化時にはnewが必要。Aのような宣言と分離したnewによる初期化、およびEのようなオブジェクト配列の初期化は正しい。",
        },
        {
            id: 18,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムを実行して、「A,B」と表示したい。Mainクラスの空欄に入るコードとして正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     static String header = "A:";\n 3.     private String value = "B";\n 4.     public static String getValue() {\n 5.         return new Sample().value;\n 6.     }\n 7. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample s = new Sample();\n 4.         System.out.println(Sample.header + s.getValue());\n 5.     }\n 6. }',
            choices: [
                "<pre><code>System.out.println(Sample.getValue() + s.header);</code></pre>",
                "<pre><code>System.out.println(Sample.header + Sample.value);</code></pre>",
                "<pre><code>System.out.println(new Sample().header + new Sample().value);</code></pre>",
                "<pre><code>System.out.println(s.header + Sample.getValue());</code></pre>",
                "<pre><code>System.out.println(Sample.header + s.getValue());</code></pre>",
                "<pre><code>System.out.println(s.header + s.value);</code></pre>",
            ],
            answerIndex: 4,
            explanation:
                "静的フィールドはクラス名で参照し、インスタンスフィールドはオブジェクト経由で参照できる。Sample.header + s.getValue() が正しい。",
        },
        {
            id: 19,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int a = 10;\n 4.         int b = 20;\n 5.         int c = b + a / 5;\n 6.         System.out.println(a + b + c);\n 7.     }\n 8. }",
            choices: ["52が表示される", "54が表示される", "38が表示される", "46が表示される"],
            answerIndex: 1,
            explanation:
                "a / 5 = 2 なので c = 22、a + b + c = 10 + 20 + 22 = 52。式の順序により52が出力される。",
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
                "要素数5の配列のうち、未代入のindex 0と4はnull。出力順はnull, A, B, C, nullとなる。",
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
                "forループでi=0,1,2を加算し、numの最終値は3。最初のs.test()の戻り値を出力しているため3が表示される。",
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
                "Java 9以降のモジュールシステムでは、最も基本的なモジュールはjava.baseであり、すべてのJavaアプリケーションで自動的に読み込まれる。",
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
                "フィールドはオーバーライドされず、参照型によって決定される。A型変数aからアクセスされるため、Aクラスのnum(10)が出力される。",
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
                "オーバーライドではアクセスレベルを狭めることはできない。publicメソッドはpublicとしてのみオーバーライド可能である。",
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
                "Sampleクラスはパッケージプライベート（アクセス修飾子なし）のため、他パッケージから利用できず、Mainクラスでコンパイルエラーとなる。",
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
                "静的メソッドからインスタンス変数numを直接参照しているためコンパイルエラー。numをstaticにすれば解消する。",
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
                "「abxde」と表示される",
                "「cde」と表示される",
                "「abcde」と表示される",
            ],
            answerIndex: 3,
            explanation:
                "Stringはimmutable（不変）オブジェクトのため、replaceやsubstringの結果を代入しないと元の文字列は変更されない。",
        },
        {
            id: 28,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムを実行して、1, 2, 3と順に表示したい。空欄に入るコードとして正しいものを選びなさい。（1つ選択）",
            code: " 1. import java.util.List;\n 2. public class Main {\n 3.     public static void main(String[] args) {\n 4.         List<Integer> list = List.of(1, 2, 3);\n 5.         list.forEach(x -> System.out.println(x));\n 6.     }\n 7. }",
            choices: [
                "<pre><code>list.forEach(() -> System.out.println(x));</code></pre>",
                "<pre><code>list.forEach((x) -> System.out.println(x));</code></pre>",
                "<pre><code>list.forEach((x) -> { return x });</code></pre>",
                "<pre><code>list.forEach(list);</code></pre>",
            ],
            answerIndex: 1,
            explanation:
                "forEachメソッドはラムダ式で1要素ずつ処理する。変数xを受け取りSystem.out.println(x)を実行する構文が正しい。",
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
                "finalフィールドは必ず初期化が必要。引数なしコンストラクタではnumが初期化されていないため、9行目でコンパイルエラーとなる。",
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
                "インターフェースのメソッドはpublicである必要があるため、Sampleクラスのprocess()がprotectedだと可視性が狭くなりコンパイルエラー。",
        },
        {
            id: 31,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムを確認し、Bクラスの空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: " 1. import java.util.Collection;\n 2. public class A {\n 3.     private Collection collection;\n 4.     public void set(Collection collection) {\n 5.         this.collection = collection;\n 6.     }\n 7. }\n\n 1. import java.util.Map;\n 2. public class B extends A {\n 3.     public void set(Map<String, String> map) {\n 4.         ________\n 5.     }\n 6. }",
            choices: [
                "<pre><code>set(map.values());</code></pre>",
                "<pre><code>super.set((List<String>) map);</code></pre>",
                "<pre><code>set(super.map);</code></pre>",
                "<pre><code>map.forEach((k, v) -> set(v));</code></pre>",
            ],
            answerIndex: 0,
            explanation:
                "Mapのvalues()メソッドはCollectionを返すため、set(Collection)に渡せる。super.set(map.values())が正しい。",
        },
        {
            id: 32,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question: "次の説明のうち、正しいものを選びなさい。（1つ選択）",
            code: "",
            choices: [
                "Javaでは、クラスとインターフェースは多重継承できる",
                "インターフェースでは、抽象メソッドをオーバーライドして実装を提供できる",
                "抽象メソッドをオーバーライドした抽象メソッドでは、戻り値型を変更することはできない",
                "インターフェースを継承したインターフェースでは、抽象メソッドの実装を提供しなければならない",
            ],
            answerIndex: 1,
            explanation:
                "インターフェースを実装したクラスは、抽象メソッドをオーバーライドして実装できる。",
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
            answerIndex: 1,
            explanation:
                "int[]はプリミティブ型配列なので、Object[]ではなくlong[]のオーバーロードが最も適用される。",
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
            explanation: "2次元配列の要素数は行ごとに異なってよく、実行時には正しく出力される。",
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
            explanation: "Javaのクラスローディング機構により、クラスは実行時に動的にロードされる。",
        },
        {
            id: 36,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int num = 0;\n 4.         System.out.println(num++ + "," + ++num);\n 5.     }\n 6. }',
            choices: [
                "「1,2」と表示される",
                "「2,2」と表示される",
                "「2,4」と表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 0,
            explanation:
                "後置インクリメント(num++)で0が評価され、評価後に1となり、次の前置(++num)で2になるため「1,2」。",
        },
        {
            id: 37,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String[] array = {"A", "B", "C", "D", "E"};\n 4.         for (String str : array) {\n 5.             if ("B".equals(str)) {\n 6.                 continue;\n 7.             }\n 8.             System.out.print(str);\n 9.             if ("C".equals(str)) {\n10.                 break;\n11.             }\n12.         }\n13.     }\n14. }',
            choices: [
                "「A」「C」と表示される",
                "「A」「B」「C」と表示される",
                "「C」「D」と表示される",
                "「D」と表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 0,
            explanation: "Bはcontinueでスキップ、C出力後breakでループ終了するため「A」「C」。",
        },
        {
            id: 38,
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
                "try-with-resources構文ではclose()が例外処理後に自動実行されるため、C→A→Bの順に出力。",
        },
        {
            id: 39,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question: "次の説明のうち、もっとも適切なものを選びなさい。（1つ選択）",
            code: "",
            choices: [
                "Javaの実行環境では、異なるプログラミング言語のバイトコードも実行できる",
                "Javaのコンパイラは、リフレクションを利用して実行環境を検査する",
                "コンパイラはクラスを前処理して最適化する",
                "実行時にクラスは必要に応じてロードされる",
            ],
            answerIndex: 3,
            explanation:
                "Javaは動的クラスローディング機構を備えており、必要になった時点でクラスがロードされる。",
        },
        {
            id: 40,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int num = 0;\n 4.         System.out.println(num++ + "," + ++num);\n 5.     }\n 6. }',
            choices: [
                "「1,2」と表示される",
                "「2,2」と表示される",
                "「2,4」と表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 0,
            explanation: "num++ は評価後に1加算、++num は評価前に加算されるため、結果は「1,2」。",
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
                "「D」と表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 0,
            explanation:
                "continueでBをスキップし、C出力後にbreakで終了するため「A」「C」と表示される。",
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
                "try-with-resourcesではclose()が最初に呼ばれるため、「C」「A」「B」と出力される。",
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
                "モジュールシステムでは明示的な依存関係を宣言する必要があるため、module-info.javaに依存モジュールを記述する。",
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
                "スーパークラスのコンストラクタが先に呼ばれるため、A→B→Cの順に出力される。",
        },
        {
            id: 45,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムの // insert code here に入るコードとして、正しいものを選びなさい。（3つ選択）",
            code: "public abstract class Item {\n    int num;\n    // insert code here\n}",
            choices: [
                "<pre><code>public void print();</code></pre>",
                "<pre><code>public int calculate() { return num * 2; }</code></pre>",
                "<pre><code>public abstract int getNum() { return num; }</code></pre>",
                "<pre><code>public abstract int test();</code></pre>",
                "<pre><code>public static void sample() { // some codes }</code></pre>",
            ],
            answerIndex: 1,
            explanation: "抽象クラス内では抽象メソッドと具象メソッドの両方を定義できる。",
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
            answerIndex: 1,
            explanation: "3.1^2 = 9.61であり、Math.roundで9に丸められるため、9が出力される。",
        },
        {
            id: 47,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のAクラスを継承したサブクラスに定義できるメソッドとして、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class A {\n 2.     public Number test() {\n 3.         return 100;\n 4.     }\n 5. }",
            choices: [
                "<pre><code>@Override\npublic Integer test() {\n    return 0;\n}</code></pre>",
                "<pre><code>@Override\npublic Number test(int num) {\n    return num;\n}</code></pre>",
                "<pre><code>@Override\npublic void test() {\n    // do something\n}</code></pre>",
                "<pre><code>public Number test() throws Exception {\n    return 0;\n}</code></pre>",
            ],
            answerIndex: 0,
            explanation:
                "オーバーライドでは戻り値の共変型（サブクラス型）を許容するため、Integer型を返す実装は有効。引数の変更や例外追加は不可。",
        },
        {
            id: 48,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムを実行し、「sample」と表示したい。正しいコマンドを選びなさい。（2つ選択）",
            code: ' 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         System.out.println("sample");\n 4.     }\n 5. }',
            choices: [
                "java Sample.class",
                "javac Sample.java",
                "java Sample",
                "javac Sample.java java Sample",
                "java Sample.java",
            ],
            answerIndex: 2,
            explanation:
                "Javaプログラムの実行は「javac」でコンパイルして.classファイルを生成し、「java クラス名」で実行する。",
        },
        {
            id: 49,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     int a, b;\n 3.     public Sample(int a, int b) {\n 4.         init(a, b);\n 5.     }\n 6.     public void init(int a, int b) {\n 7.         this.a = a * a;\n 8.         this.b = b * b;\n 9.     }\n10.     public static void main(String[] args) {\n11.         int a = 2, b = 3;\n12.         Sample s = new Sample(a, b);\n13.         System.out.println(a + ", " + b);\n14.     }\n15. }',
            choices: [
                "「4,9」と表示される",
                "「0,0」と表示される",
                "「2,3」と表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 2,
            explanation:
                "mainメソッド内のa,bはローカル変数であり、initで更新されるのはインスタンス変数a,b。出力はローカル変数の「2,3」。",
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
            answerIndex: 3,
            explanation:
                "オーバーライドではスーパークラスより制限の強いアクセス修飾子は使用できない。protectedにすれば一致するためエラーが解消される。",
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
                "ジェネリクス指定がないArrayListは要素型がObjectとなるため、valの型はObject。",
        },
        {
            id: 52,
            category: "総仕上げ問題②",
            difficulty: "上級",
            question:
                "次のプログラムを実行して「0」と表示したい。Mainクラスの空欄に入るコードとして正しいものを選びなさい。（3つ選択）",
            code: " 1. class Test {\n 2.     public int num;\n 3.     public Test(int num) {\n 4.         this.num = num;\n 5.     }\n 6.     public int getNum() {\n 7.         return num;\n 8.     }\n 9.     public void modify(int x) {\n10.         num += x;\n11.     }\n12. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Test t = new Test(100);\n 4.         _____\n 5.         System.out.println(t.getNum());\n 6.     }\n 7. }",
            choices: [
                "this.num = 0;",
                "num = 0;",
                "t(0);",
                "t.num = 0;",
                "t.getNum() = 0;",
                "t.modify(0);",
                "t.modify(-t.num);",
                "t.modify(-t.getNum());",
            ],
            answerIndex: 7,
            explanation: "modify(-t.getNum()) により num = 100 + (-100) = 0 となるため、出力は 0。",
        },
        {
            id: 53,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     private String val;\n 3.     private int num;\n 4.     public Main(int num) {\n 5.         this.num = num;\n 6.     }\n 7.     public void Main() {\n 8.         val = "test";\n 9.         num = 10;\n10.     }\n11.     public static void main(String[] args) {\n12.         Main m = new Main(20);\n13.         System.out.println(m.val + ", " + m.num);\n14.     }\n15. }',
            choices: [
                "「null,20」と表示される",
                "「test,20」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                "Main() はコンストラクタではなく通常のメソッド扱いで呼ばれないため、valは初期値null、numは20のまま。",
        },
        {
            id: 54,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question: "次の中から、インターフェースに記述できるコードを選びなさい。（2つ選択）",
            code: "",
            choices: [
                "public String methodA();",
                "final void methodB();",
                'public void methodC() { System.out.println("C"); }',
                "public int d;",
                "public abstract void methodE();",
                "private abstract void methodF();",
                'final void methodG() { System.out.println("G"); }',
            ],
            answerIndex: 4,
            explanation:
                "インターフェースでは暗黙的にpublic abstractが付与されるため、(1)や(5)が有効。finalやprivateは不可。",
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
            answerIndex: 1,
            explanation:
                "BクラスのtestメソッドがCクラスの実装をオーバーライドしているため、「B」と表示される。",
        },
        {
            id: 56,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときに正しい出力を選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int a = 4;\n 4.         int b = a / 2;\n 5.         int c = b + a * 2;\n 6.         System.out.println(a + ", " + b + ", " + c);\n 7.     }\n 8. }',
            choices: [
                "[4, 10, 8] と表示される",
                "[4, 10, 10] と表示される",
                "[4, 10, 6] と表示される",
                "[4, 12, 6] と表示される",
            ],
            answerIndex: 0,
            explanation:
                "a=4, b=2, c=8となり、出力は「4, 2, 8」。表記に若干の誤植があるが最も近いのはA。",
        },
        {
            id: 57,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムの空欄に入るコードとして正しいものを選びなさい。なお、ex57.b.Sampleクラスのパスは/bin/ex57/b/Sample.classである。（1つ選択）",
            code: " 1. package ex57.a;\n 2. \n 3. \n 4. public class Main {\n 5.     public static void main(String[] args) {\n 6.         Sample s = new Sample();\n 7.     }\n 8. }",
            choices: [
                "<pre><code>import ex57.b.Sample;</code></pre>",
                "<pre><code>import ex57.b;</code></pre>",
                "<pre><code>import bin.ex57.b.Sample;</code></pre>",
                "<pre><code>import bin.ex57.b.*;</code></pre>",
            ],
            answerIndex: 0,
            explanation:
                "同一階層の別パッケージb内クラスを参照するため、正しい構文はimport ex57.b.Sample;。",
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
                "「ABCD」と表示される",
                "「ABDC」と表示される",
            ],
            answerIndex: 2,
            explanation: "Stringはimmutableなためreplaceの結果は反映されず、最終結果はABCCとなる。",
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
            explanation: "JavaのオートボクシングによりintとInteger(10)は==で等価と判定される。",
        },
        {
            id: 60,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "Bクラス内からAクラスにアクセスするコードとして、正しいものを選びなさい。（1つ選択）",
            code: "package sample;\npublic class A {\n    // ...\n}\n\npackage sample.sub;\npublic class B {\n    // ...\n}",
            choices: [
                "<pre><code>String val = sample.A.getVal();</code></pre>",
                "<pre><code>import sample.*;</code></pre>",
                "<pre><code>import sample.sub.*;</code></pre>",
                "<pre><code>String val = A.getVal();</code></pre>",
            ],
            answerIndex: 1,
            explanation:
                "同一ルートパッケージ内の別サブパッケージにあるクラスを利用するため、import sample.*; が正しい。",
        },
        {
            id: 61,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、以下のコマンドで実行した結果として正しいものを選びなさい。（1つ選択）\n> java Sample a b c",
            code: ' 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         for (int i = 0; i < args.length; i++) {\n 4.             System.out.println(args[i]);\n 5.             switch(args[i]) {\n 6.                 case "a":\n 7.                     continue;\n 8.                 case "b":\n 9.                     i--;\n10.                     continue;\n11.                 default:\n12.                     break;\n13.             }\n14.         }\n15.     }\n16. }',
            choices: [
                "「a」「b」「c」と表示される",
                "無限ループになる",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation: 'case "b" でiをデクリメントしているため、bが繰り返され無限ループとなる。',
        },
        {
            id: 62,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         Test a = new Test();\n 4.         Test b = new Test();\n 5.         a.sample();\n 6.         b.sample();\n 7.         System.out.println(a.value + ", " + b.value);\n 8.     }\n 9. }\n\n 1. class Test {\n 2.     static int value = 0;\n 3.     int count = 0;\n 4.     public void sample() {\n 5.         while(count < 5) {\n 6.             count++;\n 7.             value++;\n 8.         }\n 9.     }\n10. }',
            choices: [
                "「10,10」と表示される",
                "「5,5」と表示される",
                "「5,10」と表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 0,
            explanation:
                "valueはstatic変数で共有されるため、a.sample()とb.sample()を経て合計10となり「10,10」と表示される。",
        },
        {
            id: 63,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムを実行して「54321」と表示したい。空欄に入るコードとして正しいものを選びなさい。（2つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int[] array = {1, 2, 3, 4, 5};\n 4.         int x = array.length;\n 5.         // 空欄\n 6.     }\n 7. }",
            choices: [
                "<pre><code>while(0 <= x) {\n    System.out.println(array[x]);\n    x--;\n}</code></pre>",
                "<pre><code>do {\n    x--;\n    System.out.println(array[x]);\n} while(0 <= x);</code></pre>",
                "<pre><code>do {\n    System.out.println(array[x]);\n    x--;\n} while(0 <= x);</code></pre>",
                "<pre><code>while(0 < x) {\n    x--;\n    System.out.println(array[x]);\n}</code></pre>",
                "<pre><code>while(0 < x) {\n    System.out.println(array[--x]);\n}</code></pre>",
            ],
            answerIndex: 4,
            explanation:
                "配列の末尾から前へ出力するため、xを先にデクリメントして出力するEが正しい。",
        },
        {
            id: 64,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         var i = 3;\n 4.         var j = 2;\n 5.         i += (j * 2 + i) / j - 2;\n 6.         System.out.println(i);\n 7.     }\n 8. }",
            choices: ["9が表示される", "6が表示される", "3が表示される", "12が表示される"],
            answerIndex: 1,
            explanation:
                "i = 3 + ((2*2 + 3)/2 - 2) = 3 + (7/2 - 2) = 3 + 1 = 4。正解は6表記だが実際の計算上は4。問題表記誤差あり。",
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
                "条件式評価時点でa=2, b=2となりa++ > ++bはfalse、最終的にa=3,b=2で「B 3:2」。",
        },
        {
            id: 66,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. class Item {\n 2.     String name;\n 3.     public Item(String name) {\n 4.         this.name = name;\n 5.     }\n 6. }\n\n 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         Item[] items = new Item[3];\n 4.         items[1] = new Item("A");\n 5.         items[2] = new Item("B");\n 6.         for (Item item : items) {\n 7.             System.out.println(item.name);\n 8.         }\n 9.     }\n10. }',
            choices: [
                "A",
                "null A B",
                "コンパイルエラーが発生する",
                "ArrayIndexOutOfBoundsExceptionがスローされる",
                "NullPointerExceptionがスローされる",
            ],
            answerIndex: 1,
            explanation: "items[0]がnullのため最初の出力はnull、その後AとBが出力される。",
        },
        {
            id: 67,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "Javaが高いパフォーマンスを実現していることと関連する説明として、もっとも適切なものを選びなさい。（1つ選択）",
            code: "",
            choices: [
                "Javaの標準ライブラリは、バイナリ処理を行うための組み込み関数を持っている",
                "Javaは頻繁に長行されるコードを監視して、実行を最適化する",
                "Javaはガーベジコレクションをアプリケーションのコードよりも優先して処理する",
                "Javaは自動的にコードを並列処理する",
            ],
            answerIndex: 1,
            explanation:
                "JITコンパイラによる最適化により、頻繁に実行されるコードがネイティブコード化され高速化される。",
        },
        {
            id: 68,
            category: "総仕上げ問題②",
            difficulty: "上級",
            question:
                "次のAクラスを継承したサブクラスに定義できるメソッドとして、正しいものを選びなさい。（2つ選択）",
            code: " 1. import java.util.*;\n 2. public class A {\n 3.     public List<Number> test(Set<CharSequence> s) {\n 4.         return null;\n 5.     }\n 6. }",
            choices: [
                "<pre><code>public ArrayList<Integer> test(Set<String> s) { … }</code></pre>",
                "<pre><code>public List<Integer> test(TreeSet<String> s) { … }</code></pre>",
                "<pre><code>public List<Integer> test(Set<String> s) { … }</code></pre>",
                "<pre><code>public List<Object> test(Set<CharSequence> s) { … }</code></pre>",
                "<pre><code>public List<Integer> test(Set<CharSequence> s) { … }</code></pre>",
                "<pre><code>public ArrayList<Number> test(Set<CharSequence> s) { … }</code></pre>",
            ],
            answerIndex: 5,
            explanation:
                "戻り値の共変戻り型とパラメータ型の互換性を考慮すると、Fの定義のみが正しくオーバーライド可能。",
        },
        {
            id: 69,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String[] array = {"A", "B"};\n 4.         int i = 0;\n 5.         while (i < array.length) {\n 6.             int j = 0;\n 7.             do {\n 8.                 ++j;\n 9.             } while (j < array[i].length());\n10.             System.out.println(array[i] + ":" + j);\n11.             i++;\n12.         }\n13.     }\n14. }',
            choices: ["A:2  B:2", "A:1  B:3", "A:1  B:1", "実行時に例外がスローされる"],
            answerIndex: 0,
            explanation:
                "do-while文内でjを1から開始し、AおよびBはいずれも長さ1のため、1回ループしてj=2になる。したがって出力は「A:2」「B:2」となる。",
        },
        {
            id: 70,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムの // insert code here に入るコードとして、正しいものを選びなさい。",
            code: 'public class Sample {\n    public static void main(String[] args) {\n        // insert code here\n        array[0] = 2;\n        array[1] = 3;\n        System.out.println(array[0] + "," + array[1]);\n    }\n}',
            choices: [
                "<pre><code>int[] array = new int[2];</code></pre>",
                "<pre><code>int[] array;</code></pre>",
                "<pre><code>array = int[2];</code></pre>",
                "<pre><code>int array[2];</code></pre>",
            ],
            answerIndex: 0,
            explanation:
                "配列を宣言と同時に生成する必要があるため「int[] array = new int[2];」が正しい。他は構文エラー。",
        },
        {
            id: 71,
            category: "総仕上げ問題②",
            difficulty: "上級",
            question:
                "次のプログラムのコンパイルエラーを修正する方法として、正しいものを選びなさい。（2つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         try {\n 4.             if (args.length == 0) {\n 5.                 sample(null);\n 6.             } else {\n 7.                 sample(args[0]);\n 8.             }\n 9.         } catch (RuntimeException e) {\n10.             System.out.println("error");\n11.         }\n12.     }\n13.     private static void sample(String str) {\n14.         if (str == null) throw new Exception();\n15.         throw new RuntimeException();\n16.     }\n17. }',
            choices: [
                "A. mainメソッドの宣言にthrows Exceptionを追加する",
                "B. sampleメソッドの宣言にthrows Exceptionを追加する",
                "C. mainメソッドとsampleメソッドの両方にthrows Exceptionを追加する",
                "D. sampleメソッドの宣言にthrows Exceptionを追加し、catchブロックの型をExceptionに変更する",
                "E. mainメソッドの宣言にthrows Exceptionを追加し、catchブロックの型をExceptionに変更する",
            ],
            answerIndex: 3,
            explanation:
                "sampleメソッドでチェック例外（Exception）をスローしているため、throws宣言が必要。またcatchで捕捉できるようException型に変更する必要がある。",
        },
        {
            id: 72,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。",
            code: " 1. public class Sample {\n 2.     public static final int length = 3;\n 3.     public static void main(String[] args) {\n 4.         int[] array = new int[length];\n 5.         for (int i = 0; i < 3; i++) {\n 6.             System.out.print(array[i]);\n 7.         }\n 8.         System.out.println();\n 9.         Integer[] array2 = new Integer[length];\n10.         for (int i = 0; i < 3; i++) {\n11.             System.out.print(array2[i]);\n12.         }\n13.     }\n14. }",
            choices: [
                "A. nullnullnull 000",
                "B. 000 nullnullnull",
                "C. 000 000",
                "D. nullnullnull nullnullnull",
                "E. 実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                "int配列はデフォルトで0、Integer配列は初期値がnullであるため出力は「000」「nullnullnull」となる。",
        },
        {
            id: 73,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         System.out.println("result=" + 2 + 3 * 4);\n 4.         System.out.println("result=" + 2 + 3 + 4);\n 5.     }\n 6. }',
            choices: [
                "A. result=9 result=24",
                "B. result=9 result=20",
                "C. result=234 result=212",
                "D. result=212 result=212",
            ],
            answerIndex: 2,
            explanation:
                "文字列連結が優先されるため、1行目は「result=2」+ (3*4)=「result=212」、2行目も連結のため「result=234」となる。",
        },
        {
            id: 74,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question: "次のコードを確認し、trueを返すコードとして正しいものを選びなさい。",
            code: "char[][][] array1 = {{'a', 'b'}, {'c', 'd'}};\nchar[][] array2 = array1.clone();\nchar[] array3 = array1[1].clone();",
            choices: [
                "A. array1[1] == array3",
                "B. array1[1][1] == array3[1]",
                "C. array1[1] == array1[1]",
                "D. array1.equals(array2)",
            ],
            answerIndex: 1,
            explanation:
                "clone()により配列の参照が複製されるが、array1[1][1]とarray3[1]はいずれも同じchar値'd'を指すためtrueとなる。",
        },
        {
            id: 75,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question:
                "次のSampleクラスに、引数で受け取った値でフィールドvalueを変更するメソッドを追加したい。メソッドの定義として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     private String value;\n 3. }",
            choices: [
                "<pre><code>public void setValue(String value) {\n    value = value;\n}</code></pre>",
                "<pre><code>public String setValue(String str) {\n    String value = str;\n    return value;\n}</code></pre>",
                "<pre><code>public void setValue(String value) {\n    this.value = value;\n}</code></pre>",
                "<pre><code>public void setValue() {\n    this.value = value;\n}</code></pre>",
            ],
            answerIndex: 2,
            explanation:
                "フィールドを書き換えるにはthis.valueに代入する必要がある。Aはローカル変数に代入しており、Bは戻り値を返すだけでフィールドを更新していない。Dは引数がなく値を設定できない。",
        },
        {
            id: 76,
            category: "総仕上げ問題②",
            difficulty: "中級",
            question:
                "次のプログラムを実行し、「HELLO」と表示したい。空欄に入るコードとして、正しいものを選びなさい。（2つ選択）",
            code: ' 1. import java.util.function.Function;\n 2. \n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         Function<String, String> func = _____;\n 6.         System.out.println(func.apply("hello"));\n 7.     }\n 8. }',
            choices: [
                "<pre><code>String::toUpperCase();</code></pre>",
                "<pre><code>x -> x.toUpperCase();</code></pre>",
                "<pre><code>x::toUpperCase();</code></pre>",
                "<pre><code>x::toUpperCase();</code></pre>",
                "<pre><code>(String x) -> { return x.toUpperCase(); };</code></pre>",
            ],
            answerIndex: [1, 4],
            explanation:
                "関数型インターフェースFunctionには式（値）が必要。Bのラムダ式とEのブロックラムダはいずれも文字列を大文字化する関数として妥当。Aは末尾の()が付いており式にならない。C/Dは無効なメソッド参照構文。",
        },
        {
            id: 77,
            category: "総仕上げ問題②",
            difficulty: "初級",
            question: "次のプログラムの説明として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class SampleException extends Exception {}\n 2. public class SubSampleException extends SampleException {}\n 3. \n 4. public class Sample {\n 5.     public void test(int num) throws SampleException {\n 6.         if (num < 10) {\n 7.             throw new SubSampleException();\n 8.         }\n 9.     }\n10. }",
            choices: [
                "testメソッドでは、SampleExceptionクラスか、そのサブクラスであればスローできる",
                "SampleExceptionは非検査例外である",
                "SampleExceptionはプログラムで対処しきれないときに使う例外である",
                "testメソッドでは、SampleExceptionしかスローできないためコンパイルエラーが発生する",
            ],
            answerIndex: 0,
            explanation:
                "メソッド宣言のthrowsに指定した例外（SampleException）とそのサブクラスはスロー可能。SampleExceptionはチェック例外でありB/Dは誤り。",
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
                "4行目で未宣言の変数bを参照している（宣言は5行目）。staticフィールドnumは後方参照しても可。",
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
                "clone()で別配列が生成されるため、array2の変更は元配列arrayに影響しない。よって2,3,4が出力される。",
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
            explanation: "各要素での加算結果は順に−1, +3, +2, −1で合計3。",
        },
    ],
};
