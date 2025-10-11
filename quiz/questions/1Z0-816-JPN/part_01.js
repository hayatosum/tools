const Q_1Z0_816_JPN_01 = {
    prefix: "1Z0-816-JPN",
    part: "01",
    questions: [
        {
            id: 1,
            category: "クラスとインタフェース",
            difficulty: "中級",
            question: "次の説明のうち、正しいものを選びなさい。（2つ選択）",
            code: "",
            choices: [
                "インナークラスはprivateで修飾できない",
                "staticなインナークラスはpublicで修飾できない",
                "ローカルクラスはpublicで修飾できない",
                "匿名クラスはfinalで修飾できない",
            ],
            answerIndex: [2, 3],
            explanation:
                "ローカルクラスはメソッド内に定義されるためpublic修飾子は使えない。また匿名クラスは名前を持たないため、継承や拡張が不可能でありfinalで修飾できない。",
        },
        {
            id: 2,
            category: "クラスとインタフェース",
            difficulty: "初級",
            question:
                "次のプログラムの「// insert code here」に記述するコードとして、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Outer {\n 2.     class Inner {\n 3.         public void test() {\n 4.             System.out.println("test");\n 5.         }\n 6.     }\n 7.     public static void main(String[] args) {\n 8.         // insert code here\n 9.     }\n10. }',
            choices: [
                "new Inner();",
                "new Outer.Inner();",
                "new Outer().new Inner();",
                "new Outer:Inner();",
            ],
            answerIndex: 2,
            explanation:
                "非staticインナークラスのインスタンス化には外部クラスのインスタンスが必要であり、「new Outer().new Inner()」が正しい。",
        },
        {
            id: 3,
            category: "クラスとインタフェース",
            difficulty: "初級",
            question:
                "次のクラスをインスタンス化するためのコードとして、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Outer {\n 2.     public static class Inner {\n 3.         // do something\n 4.     }\n 5. }",
            choices: [
                "Inner inner = new Inner();",
                "Inner inner = new Outer().new Inner();",
                "Inner inner = Outer.new Inner();",
                "Inner inner = new Outer().Inner();",
            ],
            answerIndex: 0,
            explanation:
                "staticなネストクラスは外部クラスのインスタンス不要で生成できるため、「new Inner()」が正しい。",
        },
        {
            id: 4,
            category: "クラスとインタフェース",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Outer {\n 2.     private int num = 2;\n 3.     public void hoge() {\n 4.         Inner test = new Inner();\n 5.         test.data = 100;\n 6.         test.execute();\n 7.     }\n 8.     private static class Inner {\n 9.         private int data;\n10.         void execute() {\n11.             System.out.println(num * data);\n12.         }\n13.     }\n14. }",
            choices: [
                "5行目でコンパイルエラーが発生する",
                "11行目でコンパイルエラーが発生する",
                "「200」と表示される",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                "staticネストクラスからは外部クラスのインスタンスメンバ（num）へ直接アクセスできないため、11行目でコンパイルエラーとなる。",
        },
        {
            id: 5,
            category: "クラスとインタフェース",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Outer {\n 2.     void test() {\n 3.         Inner.message = "Hello, Java";\n 4.     }\n 5.     class Inner {\n 6.         private static String message;\n 7.         public void test() {\n 8.             System.out.println(message);\n 9.         }\n10.     }\n11.     public static void main(String[] args) {\n12.         Outer outer = new Outer();\n13.         outer.test();\n14.         outer.new Inner().test();\n15.     }\n16. }',
            choices: [
                "「null」と表示される",
                "「Hello, Java」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "非staticクラスInner内にstaticフィールドを定義することは許されないため、コンパイルエラーとなる。",
        },
        {
            id: 6,
            category: "クラスとインタフェース",
            difficulty: "上級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public interface Test {\n 2.     void execute();\n 3. }\n\n 1. public class Sample {\n 2.     private String message;\n 3.     public Test test(String value) {\n 4.         class A implements Test {\n 5.             @Override\n 6.             public void execute() {\n 7.                 System.out.println(message + value);\n 8.             }\n 9.         }\n10.         value = "LocalClass";\n11.         message = "Hello, ";\n12.         return new A();\n13.     }\n14. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         new Sample()\n 4.             .test("Java")\n 5.             .execute();\n 6.     }\n 7. }',
            choices: [
                "「Hello, LocalClass」と表示される",
                "「Hello, Java」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                'ローカルクラスでは外側の変数のコピーが保持される。return前にvalueは"LocalClass"へ変更されているため、「Hello, LocalClass」と出力される。',
        },
        {
            id: 7,
            category: "クラスとインタフェース",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     private int num;\n 3.     public Sample(int num) {\n 4.         this.num = num;\n 5.     }\n 6.     public int getNum() {\n 7.         return num;\n 8.     }\n 9.     public void setNum(int num) {\n10.         this.num = num;\n11.     }\n12. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         var sample = new Sample(10);\n 4.         void modify(int num) {\n 5.             setNum(num);\n 6.         }\n 7.         sample.modify(100);\n 8.         System.out.println(sample.getNum());\n 9.     }\n10. }",
            choices: [
                "「10」と表示される",
                "「100」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "ローカルメソッド（ローカル関数）内からインスタンスメソッドsetNumを直接呼び出すことはできないため、コンパイルエラーとなる。",
        },
        {
            id: 8,
            category: "クラスとインタフェース",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: 'public class Sample {\n    public Sample() {\n        System.out.println("A");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Sample sample = new Sample() {\n            public Sample() {\n                System.out.println("B");\n            }\n        };\n    }\n}',
            choices: [
                "「A」と表示される",
                "「B」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "匿名クラスのコンストラクタを定義することはできません。匿名クラスはインスタンス初期化ブロックのみ使用できます。したがって、`public Sample()` の宣言部分でコンパイルエラーが発生します。",
        },
        {
            id: 9,
            category: "クラスとインタフェース",
            difficulty: "中級",
            question: "次のプログラムの説明として、正しいものを選びなさい。（3つ選択）",
            code: 'public interface A {\n    static void test() {\n        System.out.println("A");\n    }\n}\n\npublic interface B extends A {}\n\npublic class C implements A {}\n\npublic class D implements A {\n    public static void main(String[] args) {\n        A.test();\n        B.test();\n        C.test();\n        test();\n    }\n}',
            choices: [
                "Dクラスの3行目でコンパイルエラーが発生する",
                "Dクラスの4行目でコンパイルエラーが発生する",
                "Dクラスの5行目でコンパイルエラーが発生する",
                "Dクラスの6行目でコンパイルエラーが発生する",
            ],
            answerIndex: 1,
            explanation:
                "インターフェースの`static`メソッドは、そのインターフェース名を通してのみ呼び出せます。`B.test()`と`C.test()`および`test()`はいずれも不正で、特に`B.test()`は`B`が`A`を継承していても`A`のstaticメソッドを継承しないため、コンパイルエラーになります。正解は4行目。",
        },
        {
            id: 10,
            category: "クラスとインタフェース",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: 'public interface Sample {\n    static void test() {\n        System.out.println("A");\n    }\n}\n\npublic class SampleImpl implements Sample {\n    public static void test() {\n        System.out.println("B");\n    }\n    public static void main(String[] args) {\n        Sample.test();\n    }\n}',
            choices: [
                "「A」と表示される",
                "「B」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                "インターフェースの`static`メソッドは実装クラスから隠蔽されません。`Sample.test()`は常にインターフェース側のメソッドを呼び出すため、「A」と表示されます。",
        },
        {
            id: 11,
            category: "クラスとインタフェース",
            difficulty: "上級",
            question:
                "次のプログラムの「// insert code here」に記述するコードとして、正しいものを選びなさい。（1つ選択）",
            code: 'public interface A {\n    default void test() {\n        System.out.println("A");\n    }\n}\n\npublic interface B {\n    default void test() {\n        System.out.println("B");\n    }\n}\n\npublic interface C extends B {}\npublic interface D extends C {}\n\npublic class Sample implements A, D {\n    @Override\n    public void test() {\n        // insert code here\n    }\n}',
            choices: [
                "A.super.test();",
                "B.super.test();",
                "C.super.test();",
                "上記の選択肢はいずれもコンパイルエラーとなる",
            ],
            answerIndex: 1,
            explanation:
                "`Sample`クラスは`A`と`D`（→`C`→`B`）の両方から`test()`を継承するため衝突します。そのため`test()`をオーバーライドし、どちらかを明示的に呼ぶ必要があります。`B.super.test();`が有効であり、コンパイル・実行可能です。",
        },
        {
            id: 12,
            category: "クラスとインタフェース",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: 'public interface A {\n    default void test() {\n        System.out.println("A");\n    }\n}\n\npublic class B {\n    public void test() {\n        System.out.println("B");\n    }\n}\n\npublic class C extends B implements A {}\n\npublic class Main {\n    public static void main(String[] args) {\n        A a = new C();\n        a.test();\n    }\n}',
            choices: [
                "「A」と表示される",
                "「B」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                "クラス`B`で定義された`test()`がインターフェース`A`の`default`メソッドより優先されます。そのため実行時には`B`クラスのメソッドが呼び出され、「B」と表示されます。",
        },
        {
            id: 13,
            category: "クラスとインタフェース",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: 'public interface A {\n    public default void test() {\n        System.out.println("A");\n    }\n}\n\npublic abstract class B {\n    protected void test() {\n        System.out.println("B");\n    }\n}\n\npublic class Sample extends B implements A {\n    public static void main(String[] args) {\n        new Sample().test();\n    }\n}',
            choices: [
                "「A」と表示される",
                "「B」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                "クラスで定義されたメソッドは、インターフェースのdefaultメソッドよりも優先されます。そのため、クラスBの`test()`メソッドが呼び出され、「B」と表示されます。",
        },
        {
            id: 14,
            category: "クラスとインタフェース",
            difficulty: "初級",
            question:
                "次のプログラムの「// insert code here」に記述してコンパイルできるコードとして、正しいものを選びなさい。（1つ選択）",
            code: "public interface Sample {\n    // insert code here\n}",
            choices: [
                "private void a();",
                "private void b() { // do something }",
                "private default void c() { // do something }",
                "上記の選択肢はいずれもコンパイルエラーとなる",
            ],
            answerIndex: 2,
            explanation:
                "Java 9以降、インターフェースでは`private`メソッドを定義できますが、メソッド本体がない`private void a();`は不正です。また、`private default`の組み合わせは不正ではなく有効です。したがって`private default void c() {}`が正解です。",
        },
        {
            id: 15,
            category: "クラスとインタフェース",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行結果としてコンソールに「A」と表示したい。「// insert code here」に記述するコードとして、正しいものを選びなさい。（1つ選択）",
            code: "public enum Test {\n    A, B, C\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        // insert code here\n    }\n}",
            choices: [
                "System.out.println(Test.values()[0]);",
                "System.out.println(Test.values(0));",
                "System.out.println(Test.values()[1]);",
                "System.out.println(Test.values(1));",
                "System.out.println(Test.valueOf(1));",
                "System.out.println(Test.valueOf()[1]);",
            ],
            answerIndex: 0,
            explanation:
                "`Enum`の`values()`メソッドは、定義順に列挙子を格納した配列を返します。インデックス0には`A`が格納されているため、`System.out.println(Test.values()[0]);`で「A」と表示されます。",
        },
        {
            id: 16,
            category: "クラスとインタフェース",
            difficulty: "上級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: 'public enum Sample {\n    A("hello"), B("hello"), C("hello");\n    private final String value;\n    private Sample(String value) {\n        System.out.println(value);\n        this.value = value;\n    }\n    @Override\n    public String toString() {\n        return this.value;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(Sample.A);\n    }\n}',
            choices: [
                "「A」と表示される",
                "「hello」が1回表示される",
                "「hello」が3回表示される",
                "「hello」が4回表示される",
            ],
            answerIndex: 3,
            explanation:
                "列挙型の定数が初期化されるとき、すべての定数が生成されるため、コンストラクタ内の`System.out.println(value)`が3回実行されます。その後、`Sample.A`の`toString()`が呼ばれ「hello」がもう1回表示され、合計4回「hello」と出力されます。",
        },
    ],
};
