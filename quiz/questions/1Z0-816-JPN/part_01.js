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
                "【用語解説】\n" +
                "・インナークラス：他のクラス内に定義されるクラス（staticでないネストクラス）\n" +
                "・ローカルクラス：メソッドやコンストラクタ内に定義されるクラス\n" +
                "・匿名クラス：名前を持たないクラス（new演算子と同時に定義される）\n\n" +
                "【各選択肢の検証】\n" +
                "「インナークラスはprivateで修飾できない」→ 不正解\n" +
                "   インナークラス（非staticネストクラス）は通常のクラスと同様にprivateで修飾可能です\n\n" +
                "「staticなインナークラスはpublicで修飾できない」→ 不正解\n" +
                "   staticネストクラスも通常のクラスと同様にpublicで修飾可能です\n\n" +
                "「ローカルクラスはpublicで修飾できない」→ 正解\n" +
                "   ローカルクラスはメソッド内で定義されるため、アクセス修飾子を使用できません\n\n" +
                "「匿名クラスはfinalで修飾できない」→ 正解\n" +
                "   匿名クラスは名前がないため、クラス修飾子を明示的に指定できません\n\n" +
                "【重要なポイント】\n" +
                "・ネストクラス（インナークラス、静的ネストクラス）：通常のクラスと同様の修飾子使用可能\n" +
                "・ローカルクラス：メソッド内定義のため修飾子使用不可\n" +
                "・匿名クラス：名前がないため修飾子明示不可",
        },
        {
            id: 2,
            category: "クラスとインタフェース",
            difficulty: "初級",
            question:
                "次のプログラムの「// insert code here」に記述するコードとして、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Outer {\n 2.     class Inner {\n 3.         public void test() {\n 4.             System.out.println("test");\n 5.         }\n 6.     }\n 7.     public static void main(String[] args) {\n 8.         // insert code here\n 9.     }\n10. }',
            choices: [
                "<code>new Inner();</code>",
                "<code>new Outer.Inner();</code>",
                "<code>new Outer().new Inner();</code>",
                "<code>new Outer:Inner();</code>",
            ],
            answerIndex: 2,
            explanation:
                "【ポイント】\n" +
                "非staticインナークラス（内部クラス）は、外部クラスのインスタンスに依存します。\n\n" +
                "【各選択肢の説明】\n" +
                "new Inner(); → コンパイルエラー（外部クラスのインスタンスが必要）\n" +
                "new Outer.Inner(); → コンパイルエラー（staticクラス用の構文）\n" +
                "new Outer().new Inner(); → 正解（外部クラスのインスタンスを作成してから内部クラスを生成）\n" +
                "new Outer:Inner(); → 構文エラー（コロンは使用不可）\n\n" +
                "【理由】\n" +
                "staticでないインナークラスは外部クラスのインスタンスメンバにアクセスできるため、\n" +
                "必ず外部クラスのインスタンスが存在している必要があります。\n" +
                "そのため「外部クラスのインスタンス.new 内部クラス名()」の形式で生成します。",
        },
        {
            id: 3,
            category: "クラスとインタフェース",
            difficulty: "初級",
            question:
                "次のクラスをインスタンス化するためのコードとして、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Outer {\n 2.     public static class Inner {\n 3.         // do something\n 4.     }\n 5. }",
            choices: [
                "<code>Inner inner = new Inner();</code>",
                "<code>Inner inner = new Outer().new Inner();</code>",
                "<code>Inner inner = Outer.new Inner();</code>",
                "<code>Inner inner = new Outer().Inner();</code>",
            ],
            answerIndex: 0,
            explanation:
                "【ポイント】\n" +
                "staticネストクラスは外部クラスのインスタンスに依存せず、独立して存在できます。\n\n" +
                "【各選択肢の説明】\n" +
                "Inner inner = new Inner(); → 正解（staticクラスは単純にnew演算子で生成可能）\n" +
                "Inner inner = new Outer().new Inner(); → 不正（非staticクラス用の構文）\n" +
                "Inner inner = Outer.new Inner(); → 構文エラー\n" +
                "Inner inner = new Outer().Inner(); → 構文エラー\n\n" +
                "【理由】\n" +
                "staticネストクラスは外部クラスのインスタンスメンバにアクセスできないため、\n" +
                "外部クラスのインスタンスを必要とせず、通常のクラスと同様に生成できます。",
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
                "【ポイント】\n" +
                "staticネストクラスは外部クラスのインスタンスメンバにアクセスできません。\n\n" +
                "【コードの問題点】\n" +
                "・8行目：Innerクラスはstaticで定義されています\n" +
                "・11行目：numは外部クラスOuterのインスタンスフィールドです\n" +
                "・staticネストクラスからインスタンスメンバへの直接アクセスは不可能\n\n" +
                "【各選択肢の検証】\n" +
                "「5行目でコンパイルエラーが発生する」→ 不正解\n" +
                "   test.data = 100; は問題なし（同じクラス内のフィールドアクセス）\n" +
                "「11行目でコンパイルエラーが発生する」→ 正解\n" +
                "   num * data のnumがアクセス不可でコンパイルエラー\n" +
                "「200と表示される」「実行時に例外がスローされる」→ 不正解\n" +
                "   11行目のエラーにより実行まで到達しません",
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
                "【ポイント】\n" +
                "非staticクラス（インナークラス）内では、staticメンバを定義できません。\n\n" +
                "【ルール】\n" +
                "・非staticネストクラス内では、staticフィールドやstaticメソッドを定義不可\n" +
                "・これは、内部クラスが外部クラスのインスタンスに依存するため\n" +
                "・コンパイル時点でエラーとなります\n\n" +
                "【該当箇所】\n" +
                "6行目：`private static String message;` でコンパイルエラーが発生\n" +
                "この時点でコンパイルが失敗するため、実行結果を議論する段階に到達しません。\n\n" +
                "【理由の詳細】\n" +
                "非staticインナークラスは外部クラスの各インスタンスに属ります。\n" +
                "もしstaticフィールドが許可されると、複数の外部クラスインスタンスから\n" +
                "同じstaticフィールドを共有することになり、設計上矛盾が生じます。\n\n" +
                "【各選択肢について】\n" +
                "「null と表示される」「Hello, Java と表示される」→ 不正解\n" +
                "   コンパイルエラーのため実行できません\n" +
                "「コンパイルエラーが発生する」→ 正解\n" +
                "   6行目のstatic宣言が原因です\n" +
                "「実行時に例外がスローされる」→ 不正解\n" +
                "   コンパイル段階で失敗するため実行されません\n\n" +
                "【解決方法】\n" +
                "・`Inner`クラスを`static class Inner`にする\n" +
                "・または`message`フィールドを非staticにする\n" +
                "・外部クラスレベルでstaticフィールドを定義する",
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
            answerIndex: 2,
            explanation:
                "【ローカルクラスと変数アクセスの制限】\n" +
                "ローカルクラスは外側のメソッドの変数にアクセスできますが、その変数は事実上final（effectively final）である必要があります。\n\n" +
                "【コンパイルエラーの原因】\n" +
                "・4-9行目：ローカルクラスAのexecute()メソッド内で変数valueを参照\n" +
                '・10行目：value = "LocalClass"; でvalueを再代入\n' +
                "・ローカルクラスから参照される変数は、一度も再代入されてはいけません\n\n" +
                "【effectively finalとは】\n" +
                "変数がfinalキーワードで宣言されていなくても、\n" +
                "実質的にfinalと同じ（一度も再代入されない）状態のことです。\n\n" +
                "【解決方法】\n" +
                "10行目のvalueへの再代入を削除するか、\n" +
                "別の変数を使用する必要があります。",
        },
        {
            id: 7,
            category: "クラスとインタフェース",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     private int num;\n 3.     public Sample(int num) {\n 4.         this.num = num;\n 5.     }\n 6.     public int getNum() {\n 7.         return num;\n 8.     }\n 9.     public void setNum(int num) {\n10.         this.num = num;\n11.     }\n12. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         var sample = new Sample(10) {\n 4.             void modify(int num) {\n 5.                 setNum(num);\n 6.             }\n 7.         };\n 8.         sample.modify(100);\n 9.         System.out.println(sample.getNum());\n10.     }\n11. }",
            choices: [
                "「10」と表示される",
                "「100」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                "【匿名クラスの特徴】\n" +
                "匿名クラスはnew Sample(10) { ... }の形で作成されるクラスです。\n\n" +
                "【コード解析】\n" +
                "・3行目：Sampleクラスを継承した匿名クラスを作成\n" +
                "・4-6行目：匿名クラス内にmodifyメソッドを定義\n" +
                "・5行目：継承元のsetNum(num)メソッドを呼び出し\n" +
                "・8行目：sample.modify(100)で値を100に変更\n\n" +
                "【実行結果】\n" +
                "・最初num = 10でインスタンス生成\n" +
                "・modify(100)でnum = 100に変更\n" +
                "・getNum()で100を取得し表示\n\n" +
                "【答え】\n" +
                "「100」と表示される",
        },
        {
            id: 8,
            category: "クラスとインタフェース",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     public Sample() {\n 3.         System.out.println("A");\n 4.     }\n 5. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample sample = new Sample() {\n 4.             public Sample() {\n 5.                 System.out.println("B");\n 6.             }\n 7.         };\n 8.     }\n 9. }',
            choices: [
                "「A」と表示される",
                "「B」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "【匿名クラスの制限】\n" +
                "匿名クラスではコンストラクタを明示的に定義することはできません。\n\n" +
                "【理由】\n" +
                "・匿名クラスは名前を持たないため、コンストラクタも名前を持てません\n" +
                "・代わりにインスタンス初期化ブロック{ ... }を使用できます\n\n" +
                "【コードの問題点】\n" +
                "4行目：public Sample() { ... }はコンストラクタの定義です\n" +
                "匿名クラス内でのコンストラクタ定義は文法エラーとなります\n\n" +
                "【正しい書き方】\n" +
                'Sample sample = new Sample() { { System.out.println("B"); } // インスタンス初期化ブロック };',
        },
        {
            id: 9,
            category: "クラスとインタフェース",
            difficulty: "中級",
            question: "次のプログラムの説明として、正しいものを選びなさい。（3つ選択）",
            code: ' 1. public interface A {\n 2.     static void test() {\n 3.         System.out.println("A");\n 4.     }\n 5. }\n\n 1. public interface B extends A {}\n\n 1. public class C implements A {}\n\n 1. public class D implements A {\n 2.     public static void main(String[] args) {\n 3.         A.test();\n 4.         B.test();\n 5.         C.test();\n 6.         test();\n 7.     }\n 8. }',
            choices: [
                "Dクラスの3行目でコンパイルエラーが発生する",
                "Dクラスの4行目でコンパイルエラーが発生する",
                "Dクラスの5行目でコンパイルエラーが発生する",
                "Dクラスの6行目でコンパイルエラーが発生する",
            ],
            answerIndex: [1, 2, 3],
            explanation:
                "【インターフェースのstaticメソッドの特徴】\n" +
                "インターフェースのstaticメソッドは、そのインターフェース名でのみ呼び出し可能です。\n\n" +
                "【各行の検証】\n" +
                "3行目：A.test() → 正常（インターフェース名で直接呼び出し）\n" +
                "4行目：B.test() → コンパイルエラー（BはAのstaticメソッドを継承しない）\n" +
                "5行目：C.test() → コンパイルエラー（実装クラスからは呼び出し不可）\n" +
                "6行目：test() → コンパイルエラー（インターフェース名の省略不可）\n\n" +
                "【重要なルール】\n" +
                "・インターフェースのstaticメソッドは継承されません\n" +
                "・実装クラスからは隠蔽され、直接アクセスできません\n" +
                "・必ず定義元のインターフェース名を明記する必要があります\n\n" +
                "【正解】\n" +
                "4行目、5行目、6行目でコンパイルエラーが発生する",
        },
        {
            id: 10,
            category: "クラスとインタフェース",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public interface Sample {\n 2.     static void test() {\n 3.         System.out.println("A");\n 4.     }\n 5. }\n\n 1. public class SampleImpl implements Sample {\n 2.     public static void test() {\n 3.         System.out.println("B");\n 4.     }\n 5.     public static void main(String[] args) {\n 6.         Sample.test();\n 7.     }\n 8. }',
            choices: [
                "「A」と表示される",
                "「B」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                "【インターフェースのstaticメソッドとクラス継承の関係】\n" +
                "インターフェースのstaticメソッドは実装クラスからは独立しています。\n\n" +
                "【ポイント】\n" +
                "・SampleImplクラスにも同名のstatic void test()が定義されています\n" +
                "・しかしSample.test()と記述した場合、必ずインターフェース側が呼ばれます\n" +
                "・実装クラスのstaticメソッドは完全に別物として扱われます\n\n" +
                "【実行の流れ】\n" +
                "6行目：Sample.test()を実行\n" +
                "→ インターフェースSampleのstaticメソッドが呼ばれる\n" +
                "→ 「A」と表示される\n\n" +
                "【重要】\n" +
                "クラス側のtest()メソッドは呼ばれません。\n" +
                "インターフェースのstaticメソッドは実装クラスに「隠蔽」されず、\n" +
                "常にインターフェース名で明示的に呼び出す必要があります。",
        },
        {
            id: 11,
            category: "クラスとインタフェース",
            difficulty: "上級",
            question:
                "次のプログラムの「// insert code here」に記述するコードとして、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public interface A {\n 2.     default void test() {\n 3.         System.out.println("A");\n 4.     }\n 5. }\n\n 1. public interface B {\n 2.     default void test() {\n 3.         System.out.println("B");\n 4.     }\n 5. }\n\n 1. public interface C extends B {}\n\n 1. public interface D extends C {}\n\n 1. public class Sample implements A, D {\n 2.     @Override\n 3.     public void test() {\n 4.         // insert code here\n 5.     }\n 6. }',
            choices: [
                "<code>A.super.test();</code>",
                "<code>B.super.test();</code>",
                "<code>C.super.test();</code>",
                "他の選択肢はいずれもコンパイルエラーとなる",
            ],
            answerIndex: 0,
            explanation:
                "【defaultメソッドの衝突と解決】\n" +
                "Sampleクラスは複数のインターフェースから同名のdefaultメソッドを継承しています。\n\n" +
                "【継承関係の整理】\n" +
                "・Aインターフェース：default void test() を定義\n" +
                "・Bインターフェース：default void test() を定義\n" +
                "・CはBを継承（Bのtest()を継承）\n" +
                "・DはCを継承（結果的にBのtest()を継承）\n" +
                "・SampleはAとDを実装\n\n" +
                "【衝突の解決】\n" +
                "SampleはA.test()とB.test()（D経由）の両方を継承するため衝突します。\n" +
                "そのため明示的にオーバーライドし、どちらかを呼ぶ必要があります。\n\n" +
                "【選択肢の検証】\n" +
                "A.super.test(); → 正解（インターフェースAのdefaultメソッドを呼び出し）\n" +
                "B.super.test(); → 正解（インターフェースBのdefaultメソッドを呼び出し）\n" +
                "C.super.test(); → コンパイルエラー（Cにはdefaultメソッドの実装がない）\n\n" +
                "正解はA.super.test();です。",
        },
        {
            id: 12,
            category: "クラスとインタフェース",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public interface A {\n 2.     default void test() {\n 3.         System.out.println("A");\n 4.     }\n 5. }\n\n 1. public class B {\n 2.     public void test() {\n 3.         System.out.println("B");\n 4.     }\n 5. }\n\n 1. public class C extends B implements A {}\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         A a = new C();\n 4.         a.test();\n 5.     }\n 6. }',
            choices: [
                "「A」と表示される",
                "「B」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                "【クラスのメソッドとdefaultメソッドの優先順位】\n" +
                "Javaでは「クラス wins」の原則があります。\n\n" +
                "【優先順位のルール】\n" +
                "1. クラスで定義されたメソッド（最優先）\n" +
                "2. インターフェースのdefaultメソッド\n" +
                "3. 親インターフェースのdefaultメソッド\n\n" +
                "【このコードの場合】\n" +
                "・クラス`B`：`public void test()` を定義\n" +
                "・インターフェース`A`：`default void test()` を定義\n" +
                "・クラス`C`は`B`を継承し、`A`を実装\n\n" +
                "【実行の流れ】\n" +
                "変数`a`の型は`A`（インターフェース）ですが、実際のオブジェクトは`C`のインスタンスです。\n" +
                "メソッド呼び出し時は実際のオブジェクトのクラス階層を参照します。\n" +
                "クラス`C`は`B`を継承しているため、`B`の`test()`メソッドが優先されます。\n\n" +
                "【各選択肢について】\n" +
                "「A と表示される」→ 不正解\n" +
                "   インターフェースのdefaultメソッドは優先されません\n" +
                "「B と表示される」→ 正解\n" +
                "   クラス`B`のメソッドが優先されて呼び出されます\n" +
                "「コンパイルエラーが発生する」「実行時に例外がスローされる」→ 不正解\n" +
                "   正常にコンパイル・実行できます\n\n" +
                "【重要なポイント】\n" +
                "・変数の型がインターフェースでも、実際のオブジェクトのクラス階層で最も具体的なメソッドが呼ばれます\n" +
                "・クラスのメソッドは常にインターフェースのdefaultメソッドより優先されます\n" +
                "・これにより既存のクラスにインターフェースを追加しても動作が変わりません",
        },
        {
            id: 13,
            category: "クラスとインタフェース",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public interface A {\n 2.     public default void test() {\n 3.         System.out.println("A");\n 4.     }\n 5. }\n\n 1. public abstract class B {\n 2.     protected void test() {\n 3.         System.out.println("B");\n 4.     }\n 5. }\n\n 1. public class Sample extends B implements A {\n 2.     public static void main(String[] args) {\n 3.         new Sample().test();\n 4.     }\n 5. }',
            choices: [
                "「A」と表示される",
                "「B」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "【アクセス修飾子の衝突】\n" +
                "この問題ではアクセス修飾子の互換性が問題となります。\n\n" +
                "【問題の詳細】\n" +
                "・インターフェースA：public default void test() を定義\n" +
                "・抽象クラスB：protected void test() を定義\n" +
                "・クラスSampleは両方を継承\n\n" +
                "【コンパイルエラーの理由】\n" +
                "インターフェースのメソッドは暗黙的にpublicです。\n" +
                "クラスBのprotectedメソッドでは、より制限的なアクセス修飾子となるため、\n" +
                "インターフェースの契約（public）を満たせません。\n\n" +
                "【Javaのルール】\n" +
                "メソッドをオーバーライドする際、アクセス修飾子はより制限的にできません。\n" +
                "public > protected > package-private > private の順で制限が強くなります。\n\n" +
                "【解決方法】\n" +
                "クラスBのメソッドをpublicにするか、Sampleクラスで明示的に\n" +
                "public void test()をオーバーライドする必要があります。",
        },
        {
            id: 14,
            category: "クラスとインタフェース",
            difficulty: "初級",
            question:
                "次のプログラムの「// insert code here」に記述してコンパイルできるコードとして、正しいものを選びなさい。（1つ選択）",
            code: " 1. public interface Sample {\n 2.     // insert code here\n 3. }",
            choices: [
                "<code>private void a();</code>",
                "<code>private void b() { // do something }</code>",
                "<code>private default void c() { // do something }</code>",
                "他の選択肢はいずれもコンパイルエラーとなる",
            ],
            answerIndex: 1,
            explanation:
                "【Java 9のインターフェースprivateメソッド】\n" +
                "Java 9以降、インターフェースではprivateメソッドを定義できるようになりました。\n\n" +
                "【各選択肢の検証】\n" +
                "private void a(); → コンパイルエラー\n" +
                "   理由：privateメソッドは必ず実装が必要（抽象メソッドにできない）\n\n" +
                "private void b() { // do something } → 正解\n" +
                "   理由：実装を持つprivateメソッドは定義可能\n\n" +
                "private default void c() { // do something } → コンパイルエラー\n" +
                "   理由：privateとdefaultは同時に使用できません\n\n" +
                "【privateメソッドの特徴】\n" +
                "・必ず実装（メソッド本体）が必要\n" +
                "・defaultキーワードは使用不可\n" +
                "・外部からアクセス不可\n\n" +
                "【privateメソッドの用途】\n" +
                "インターフェース内のdefaultメソッドやstaticメソッドから\n" +
                "共通処理を呼び出すためのヘルパーメソッドとして使用されます。",
        },
        {
            id: 15,
            category: "クラスとインタフェース",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行結果としてコンソールに「A」と表示したい。「// insert code here」に記述するコードとして、正しいものを選びなさい。（1つ選択）",
            code: "1. public enum Test {\n2.     A, B, C\n3. }\n\n1. public class Main {\n2.     public static void main(String[] args) {\n3.         // insert code here\n4.     }\n5. }",
            choices: [
                "<code>System.out.println(Test.values()[0]);</code>",
                "<code>System.out.println(Test.values(0));</code>",
                "<code>System.out.println(Test.values()[1]);</code>",
                "<code>System.out.println(Test.values(1));</code>",
                "<code>System.out.println(Test.valueOf(1));</code>",
                "<code>System.out.println(Test.valueOf()[1]);</code>",
            ],
            answerIndex: 0,
            explanation:
                "【Enumのvalues()メソッド】\n" +
                "列挙型（Enum）には自動的に生成される便利なメソッドがあります。\n\n" +
                "【values()メソッドの特徴】\n" +
                "・列挙定数を定義順に格納した配列を返します\n" +
                "・Test.values() は [A, B, C] の配列を返します\n" +
                "・配列のインデックスは0から始まります\n\n" +
                "【各選択肢の検証】\n" +
                "Test.values()[0] → 正解（インデックス0はA）\n" +
                "Test.values(0) → 構文エラー（values()は引数を取りません）\n" +
                "Test.values()[1] → インデックス1はBを返します\n" +
                "その他の選択肢 → いずれも不正な構文\n\n" +
                "【目標の達成】\n" +
                "「A」と表示するには、配列の最初の要素（インデックス0）を取得します。\n\n" +
                "【参考：Enumの主要メソッド】\n" +
                "・valueOf(String name)：名前から列挙定数を取得\n" +
                "・ordinal()：列挙定数の序数（定義順の番号）を取得\n" +
                "・values()：すべての列挙定数を配列で取得",
        },
        {
            id: 16,
            category: "クラスとインタフェース",
            difficulty: "上級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public enum Sample {\n 2.     A("hello"), B("hello"), C("hello");\n 3.     private final String value;\n 4.     private Sample(String value) {\n 5.         System.out.println(value);\n 6.         this.value = value;\n 7.     }\n 8.     @Override\n 9.     public String toString() {\n10.         return this.value;\n11.     }\n12. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         System.out.println(Sample.A);\n 4.     }\n 5. }',
            choices: [
                "「A」と表示される",
                "「hello」が1回表示される",
                "「hello」が3回表示される",
                "「hello」が4回表示される",
            ],
            answerIndex: 3,
            explanation:
                "【Enumの初期化タイミング】\n" +
                "列挙型は最初にアクセスされた時に、すべての定数が一度に初期化されます。\n\n" +
                "【実行の流れ】\n" +
                "1. Sample.Aに最初にアクセス\n" +
                "2. 列挙型Sampleの初期化が開始される\n" +
                "3. すべての定数（A, B, C）のコンストラクタが順次実行される\n" +
                '   - A("hello")：コンストラクタで「hello」を出力（1回目）\n' +
                '   - B("hello")：コンストラクタで「hello」を出力（2回目）\n' +
                '   - C("hello")：コンストラクタで「hello」を出力（3回目）\n' +
                "4. System.out.println(Sample.A)でtoString()が呼ばれる\n" +
                "5. オーバーライドされたtoString()で「hello」を出力（4回目）\n\n" +
                "【重要なポイント】\n" +
                "・列挙型の初期化は「すべて or なし」です\n" +
                "・一つの定数にアクセスすると、すべての定数が初期化されます\n" +
                "・これにより効率的なメモリ使用と一貫性が保たれます\n\n" +
                "【結果】\n" +
                "合計4回「hello」が表示されます。",
        },
    ],
};
