const JAVA_SILVER_1Z0_815_JPN_07 = {
    prefix: "1Z0-815-JPN_07",
    questions: [
        {
            id: 1,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "中級",
            question: "このクラスが継承しているParentクラスの説明として、正しいものを選びなさい。",
            code: ' 1. public class Child extends Parent {\n 2.     Child() {\n 3.         name = "java";\n 4.     }\n 5.     void hello() {\n 6.         System.out.println("hello, " + name);\n 7.     }\n 8. }',
            choices: [
                "Parentクラスは、helloメソッドの定義を持っていなければいけない",
                "Parentクラスには、フィールドを初期化するためのコンストラクタを定義しなければいけない",
                "Parentクラスには、helloフィールドを定義しなければいけない",
                "Parentクラスには、nameフィールドを定義しなければいけない",
            ],
            answerIndex: 3,
            explanation:
                "Childクラスではnameフィールドを利用しているため、Parentクラスにnameフィールドが存在している必要がある。",
        },
        {
            id: 2,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "初級",
            question: "継承の説明として正しいものを選びなさい。",
            code: "",
            choices: [
                "アクセス修飾子がデフォルトのままのフィールドは、すべてのサブクラスのメソッドからアクセスできる",
                "アクセス修飾子がprivateなメソッドであっても、サブクラスからは利用できる",
                "サブクラスであっても、コンストラクタは引き継がない",
                "アクセス修飾子がprotectedメソッドには、同じパッケージに属するサブクラスのみアクセスできる",
            ],
            answerIndex: 2,
            explanation:
                "コンストラクタは継承されないため、サブクラスでは独自に定義する必要がある。",
        },
        {
            id: 3,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "初級",
            question: "インタフェースに関する説明として、正しいものを選びなさい。（2つ選択）",
            code: "",
            choices: [
                "アクセス修飾子を省略しても、publicなメソッドとして扱われる",
                "フィールドは一切定義できない",
                "クラスは複数のインタフェースを同時に実装できない",
                "インタフェースを継承することはできない",
                "抽象クラスは、インタフェースに定義されているメソッドを実現しなくてもよい",
            ],
            answerIndex: [0, 4],
            explanation:
                "インタフェースのメソッドは自動的にpublicになる。また、抽象クラスはインタフェースを実装した場合でもメソッドの実装を必須としない。",
        },
        {
            id: 4,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "中級",
            question: "次のプログラムの説明として正しいものを選びなさい。",
            code: ' 1. public interface A {\n 2.     void sample() {\n 3.         System.out.println("sample");\n 4.     }\n 5. }\n\n 1. public class B implements A {\n 2. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         A a = new B();\n 4.         a.sample();\n 5.     }\n 6. }',
            choices: [
                "インタフェースのsampleメソッドをdefaultで修飾しなければいけない",
                "インタフェースのsampleメソッドを削除し、Bクラスにsampleメソッドを追加しなければいけない",
                "実行時に例外がスローされる",
                "「sample」と表示される",
            ],
            answerIndex: 0,
            explanation:
                "インタフェースの通常メソッドには処理を記述できない。実装を持たせる場合はdefault修飾子が必要である。",
        },
        {
            id: 5,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
            code: ' 1. public interface A {\n 2.     @Override\n 3.     default String toString() {\n 4.         return "A";\n 5.     }\n 6. }\n\n 1. public class B implements A {\n 2.     @Override\n 3.     public String toString() {\n 4.         return "B";\n 5.     }\n 6. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         A a = new B();\n 4.         System.out.println(a);\n 5.     }\n 6. }',
            choices: [
                "Aインタフェースでコンパイルエラーとなる",
                "Bクラスでコンパイルエラーとなる",
                "Aが表示される",
                "Bが表示される",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                "インタフェースでdefaultメソッドとしてObjectクラス（toStringなど）に定義されているメソッドをオーバーライドすることはできません。Javaの仕様上、インタフェースのdefaultメソッドはObjectクラスのメソッドと競合するため、AインタフェースのtoString()定義でコンパイルエラーとなります。",
        },
        {
            id: 6,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "中級",
            question:
                "以下に示すコードをコンパイル、実行し、「Hello Java」を表示したい。Cクラスの空欄に入るコードとして正しいものを選びなさい。（1つ選択）",
            code: ' 1. public interface A {\n 2.     default void sample() {\n 3.         System.out.print("Hello ");\n 4.     }\n 5. }\n\n 1. public interface B extends A {\n 2. }\n\n 1. public class C implements B {\n 2.     @Override\n 3.     public void sample() {\n 4.         ____________\n 5.         System.out.println("Java");\n 6.     }\n 7. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         A a = new C();\n 4.         a.sample();\n 5.     }\n 6. }',
            choices: [
                "<code>super.sample();</code>",
                "<code>A.super.sample();</code>",
                "<code>public.sample();</code>",
                "<code>new.sample();</code>",
                "他の選択肢のいずれも誤りである",
            ],
            answerIndex: 4,
            explanation:
                "オーバーライドしたメソッドから元のデフォルトメソッドの呼び出しは、2つ以上の実現や継承の階層をまたいで行うことはできない。",
        },
        {
            id: 7,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。",
            code: ' 1. public interface A {\n 2.     default void test() {\n 3.         System.out.println("A");\n 4.     }\n 5. }\n\n 1. public interface B {\n 2.     default void test() {\n 3.         System.out.println("B");\n 4.     }\n 5. }\n\n 1. public class Main implements A, B {\n 2.     public static void main(String[] args) {\n 3.         new Main().test();\n 4.     }\n 5. }',
            choices: [
                "Aが表示される",
                "Bが表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "複数のインタフェースで同一シグネチャのデフォルトメソッドを持つ場合、曖昧さを解消するために明示的にオーバーライドが必要。",
        },
        {
            id: 8,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "初級",
            question: "抽象クラスに関する説明として、正しいものを選びなさい。（3つ選択）",
            code: "",
            choices: [
                "インスタンスを生成することはできない",
                "抽象クラスのメソッドはオーバーライドできない",
                "サブクラスから抽象クラスの公開フィールドに自由にアクセスできる",
                "抽象クラスを継承した抽象クラスを定義できる",
                "抽象メソッドは、すべてのサブクラスが実装しなければいけない",
            ],
            answerIndex: [0, 3, 4],
            explanation:
                "抽象クラスはインスタンス化できないが、抽象クラスを継承するクラスは可能。また、抽象メソッドはすべての具象サブクラスで実装が必須。",
        },
        {
            id: 9,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "上級",
            question: "次のプログラムを実行した結果として正しいものを選びなさい。",
            code: ' 1. abstract class AbstractSample {\n 2.     public void sample() {\n 3.         System.out.println("A");\n 4.         test();\n 5.         System.out.println("C");\n 6.     }\n 7.     protected abstract void test();\n 8. }\n\n 1. class ConcreteSample extends AbstractSample {\n 2.     protected void test() {\n 3.         System.out.println("B");\n 4.     }\n 5. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         AbstractSample s = new ConcreteSample();\n 4.         s.sample();\n 5.     }\n 6. }',
            choices: [
                "「A」「B」「C」と表示される",
                "「A」「C」と表示される",
                "AbstractSampleクラスでコンパイルエラーが発生する",
                "ConcreteSampleクラスでコンパイルエラーが発生する",
                "Mainクラスでコンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                "sampleメソッドが呼ばれると「A」、test()の実装で「B」、続いて「C」と順に表示される。",
        },
        {
            id: 10,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "初級",
            question: "オーバーライドに関する説明として正しいものを選びなさい。",
            code: "",
            choices: [
                "引数リストの定義は、型、数、順番のすべてが同じでなければならない",
                "戻り値は同じ型でなければいけない",
                "抽象メソッドはオーバーライドできない",
                "オーバーロードされたメソッドはオーバーライドできない",
            ],
            answerIndex: 0,
            explanation:
                "オーバーライドは引数リストが完全に一致している必要がある。戻り値は共変戻り値であれば変更可能。",
        },
        {
            id: 11,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "中級",
            question:
                "サブクラスにhelloメソッドをオーバーライドしようとするとき、適切なアクセス修飾子を選びなさい。",
            code: ' 1. public class Sample {\n 2.     protected void hello() {\n 3.         System.out.println("hello.");\n 4.     }\n 5. }',
            choices: [
                "デフォルト（アクセス修飾子なし）",
                "private",
                "public",
                "アクセス修飾子は変えられない",
            ],
            answerIndex: 2,
            explanation:
                "オーバーライドする際はスーパークラスと同等か、それより緩やかなアクセス修飾子しか付けられない。よってprotectedをpublicに拡張することは可能。",
        },
        {
            id: 12,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "中級",
            question: "次のクラスを利用して正しい実行結果を選びなさい。",
            code: ' 1. class A {\n 2.     String val = "A";\n 3.     void print() {\n 4.         System.out.print(val);\n 5.     }\n 6. }\n 7. class B extends A {\n 8.     String val = "B";\n 9. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         A a = new A();\n 4.         A b = new B();\n 5.         System.out.print(a.val);\n 6.         System.out.print(b.val);\n 7.         a.print();\n 8.         b.print();\n 9.     }\n10. }',
            choices: [
                '"ABAB" と表示される',
                '"AAAA" と表示される',
                '"AAAB" と表示される',
                "Bクラスでコンパイルエラーが発生する",
                "Mainクラスでコンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                "フィールドを参照した場合は、変数の型で宣言されたほうを使う。メソッドを呼び出した場合には、メソッド内の指示に従う。よって、結果はAAAAとなる。",
        },
        {
            id: 13,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "初級",
            question: "次のクラスを利用して正しい結果を選びなさい。",
            code: ' 1. interface Worker {\n 2.     void work();\n 3. }\n 4. class Employee {\n 5.     public void work() {\n 6.         System.out.println("work");\n 7.     }\n 8. }\n\n 1. class Engineer extends Employee implements Worker {}\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Worker worker = new Engineer();\n 4.         worker.work();\n 5.     }\n 6. }',
            choices: [
                "Engineerクラスでコンパイルエラーが発生する",
                "Mainクラスでコンパイルエラーが発生する",
                '"work" と表示される',
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "EngineerはEmployeeを継承しているため、Employeeのwork()が利用される。結果は「work」と表示される。",
        },
        {
            id: 14,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "上級",
            question:
                "次のクラスとインタフェースを利用するMainクラスをコンパイル、実行した結果をすべて選びなさい。",
            code: ' 1. public interface Worker {\n 2.     void work();\n 3. }\n\n 1. class Employee implements Worker {\n 2.     public void work() {\n 3.         System.out.println("work");\n 4.     }\n 5.     public void report() {\n 6.         System.out.println("report");\n 7.     }\n 8. }\n\n 1. class Engineer extends Employee {\n 2.     public void create() {\n 3.         System.out.println("create future");\n 4.     }\n 5. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Worker a = new Engineer();\n 4.         Employee b = new Engineer();\n 5.         Engineer c = new Engineer();\n 6.         a.create();\n 7.         b.work();\n 8.         c.report();\n 9.     }\n10. }',
            choices: [
                "Mainクラスの6行目でコンパイルエラーが発生する",
                "Mainクラスの7行目でコンパイルエラーが発生する",
                "Mainクラスの8行目でコンパイルエラーが発生する",
            ],
            answerIndex: 0,
            explanation:
                "Worker型変数aではcreate()メソッドが利用できないため、Mainクラスの6行目でコンパイルエラーとなる。",
        },
        {
            id: 15,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "中級",
            question:
                "次のプログラムを確認してください。これらのクラスやインタフェースを利用する以下のプログラムをコンパイル、実行したときの結果として、正しいものをすべて選びなさい。",
            code: " 1. public interface A {}\n\n 1. public class B implements A {}\n\n 1. public class C extends B {}\n\n 1. public class D {}\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         A[] array = {\n 4.             new B(),\n 5.             new C(),\n 6.             new A(),\n 7.             new D()\n 8.         };\n 9.     }\n10. }",
            choices: [
                "4行目でコンパイルエラーが発生する",
                "5行目でコンパイルエラーが発生する",
                "6行目でコンパイルエラーが発生する",
                "7行目でコンパイルエラーが発生する",
                "正常に動作する",
            ],
            answerIndex: [2, 3],
            explanation:
                "インタフェースは直接インスタンス化できないため、`new A()` の箇所でコンパイルエラーが発生します。",
        },
        {
            id: 16,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "初級",
            question:
                "次のプログラムを確認してください。これらのクラスを利用する以下のプログラムを実行し、「hello」とコンソールに表示したい。4行目の空欄に入るコードとして、正しいものを選びなさい。",
            code: ' 1. class A {}\n\n 1. class B extends A {\n 2.     void hello() {\n 3.         System.out.println("hello");\n 4.     }\n 5. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         A a = new B();\n 4.         __________\n 5.         b.hello();\n 6.     }\n 7. }',
            choices: [
                "A b = a;",
                "A b = new B();",
                "A b = (A) a;",
                "B b = a;",
                "B b = (A) a;",
                "B b = (B) a;",
            ],
            answerIndex: 5,
            explanation:
                "変数aはA型ですが、実際のインスタンスはB型です。`hello()`を呼び出すにはB型にキャストする必要があるため、`B b = (B) a;` が正解です。",
        },
        {
            id: 17,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "中級",
            question:
                "次のプログラムを確認してください。これらのクラスを利用する以下のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
            code: ' 1. class A {\n 2.     void hello() {\n 3.         System.out.println("A");\n 4.     }\n 5. }\n\n 1. class B extends A {\n 2.     void hello() {\n 3.         System.out.println("B");\n 4.     }\n 5. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         A a = new A();\n 4.         B b = (B) a;\n 5.         b.hello();\n 6.     }\n 7. }',
            choices: [
                "Aが表示される",
                "Bが表示される",
                "Mainクラスでコンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 3,
            explanation:
                "変数aはA型のインスタンスなので、B型へのキャスト（B b = (B) a;）は実行時に失敗し、ClassCastExceptionがスローされます。\n" +
                "このように、親クラス型の変数に子クラスの型でキャストしようとした場合、実際のインスタンスが子クラスでなければ例外が発生します。\n" +
                "したがって、正しい答えは「実行時に例外がスローされる」です。",
        },
        {
            id: 18,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "初級",
            question:
                "次のプログラムを確認してください。コンソールに「10」と表示するために、Sampleクラスの4行目の空欄に入るコードとして正しいものを選びなさい。（2つ選択）",
            code: " 1. class Sample {\n 2.     private int num;\n 3.     public Sample(int num) {\n 4.         __________\n 5.     }\n 6.     public int getNum() {\n 7.         return num;\n 8.     }\n 9.     public void setNum(int num) {\n10.         this.num = num;\n11.     }\n12. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample s = new Sample(10);\n 4.         System.out.println(s.getNum());\n 5.     }\n 6. }",
            choices: [
                "this.num = num;",
                "this->num = num;",
                "num = num;",
                "setNum(num);",
                "super.setNum(num);",
            ],
            answerIndex: [0, 3],
            explanation:
                "コンストラクタでフィールド`num`に引数を代入する必要があります。直接代入`this.num = num;` または `setNum(num);` が正解です。",
        },
        {
            id: 19,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "中級",
            question:
                "次のプログラムを確認してください。これらのクラスを利用する以下のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
            code: ' 1. class Parent {\n 2.     String name;\n 3.     String getName() {\n 4.         return this.name;\n 5.     }\n 6. }\n\n 1. class Child extends Parent {\n 2.     String name;\n 3. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Child child = new Child();\n 4.         child.name = "sample";\n 5.         System.out.println(child.getName());\n 6.     }\n 7. }',
            choices: [
                "「sample」と表示される",
                "「null」と表示される",
                "何も表示されない",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                "親クラスの`name`と子クラスの`name`は別フィールドです。`child.name`に代入したのは子クラス側であり、`getName()`が参照するのは親クラスの`name`なので`null`が表示されます。",
        },
        {
            id: 20,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "初級",
            question:
                "次のプログラムを確認してください。これらのクラスを利用する以下のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
            code: ' 1. class A {\n 2.     public A() {\n 3.         System.out.println("A");\n 4.     }\n 5. }\n\n 1. class B extends A {\n 2.     public B() {\n 3.         System.out.println("B");\n 4.     }\n 5. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         A a = new B();\n 4.     }\n 5. }',
            choices: [
                "「A」と表示される",
                "「B」と表示される",
                "「A」「B」と表示される",
                "「B」「A」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "Bのコンストラクタが呼ばれる際に、まずAのコンストラクタが呼ばれるため「A」「B」と順に表示されます。",
        },
        {
            id: 21,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "上級",
            question:
                "次のプログラムを確認してください。これらのクラスを利用する以下のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。",
            code: ' 1. class Parent {\n 2.     public Parent() {\n 3.         System.out.println("A");\n 4.     }\n 5.     public Parent(String val) {\n 6.         this();\n 7.         System.out.println(val);\n 8.     }\n 9. }\n\n 1. class Child extends Parent {\n 2.     public Child() {\n 3.         super("B");\n 4.         System.out.println("C");\n 5.     }\n 6.     public Child(String val) {\n 7.         this();\n 8.         System.out.println(val);\n 9.     }\n10. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         new Child("D");\n 4.     }\n 5. }',
            choices: [
                "「A」「B」「C」「D」と表示される",
                "「A」「B」と表示される",
                "「B」「A」「D」「C」と表示される",
                "「A」「B」「D」「C」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                'Child(String) → this() で Child() が呼ばれ、Child() 内で super("B") により Parent(String) が呼ばれ、その中で this() により Parent() が呼ばれます。結果として「A」「B」「C」「D」と順に出力されます。',
        },
    ],
};
