const Q_1Z0_815_JPN_07 = {
    prefix: "1Z0-815-JPN",
    part: "07",
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
                "Childクラスでは、親クラスであるParentクラスを継承しています。\n\nChildクラスのコンストラクタやhelloメソッドの中でnameフィールドを使っているため、Parentクラスにnameフィールドが定義されている必要があります。\n\nもしParentクラスにnameフィールドがなければ、Childクラスでnameを使ったときにコンパイルエラーになります。\n\n一方、helloメソッドやhelloフィールド、特別なコンストラクタはParentクラスに必須ではありません。\n\nこのように、サブクラスで利用しているフィールドやメソッドは、親クラスに定義されている必要がある点がポイントです。",
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
                "クラスを継承した場合でも、親クラスのコンストラクタはサブクラスに引き継がれません。\n\nサブクラスでは、必要に応じて独自のコンストラクタを定義する必要があります。\n\n一方、アクセス修飾子がデフォルトやprivateのメンバーは、サブクラスから必ずしもアクセスできるとは限りません。\n\nprotectedメソッドは、同じパッケージ内やサブクラスからアクセスできますが、同じパッケージに属するサブクラスだけに限定されるわけではありません。\n\nこのように、コンストラクタは継承されないという点がポイントです。",
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
                "インタフェースで宣言したメソッドは、アクセス修飾子を省略しても自動的にpublicとなります。\n\nまた、抽象クラスがインタフェースを実装する場合、すべてのメソッドを実装する義務はありません。抽象クラス自身が抽象メソッドとして残してもよいからです。\n\n一方、インタフェースには定数（public static final）以外のフィールドは定義できません。\n\nクラスは複数のインタフェースを同時に実装できますし、インタフェース同士も継承が可能です。\n\nこのように、インタフェースのメソッドは自動的にpublicとなること、抽象クラスはインタフェースのメソッドを必ずしもすべて実装しなくてよいことがポイントです。",
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
                'インタフェースのメソッドに処理（本体）を記述したい場合は、default修飾子を付ける必要があります。\n\nvoid sample() { ... } のように本体を持つメソッドをインタフェースで宣言すると、コンパイルエラーになります。\n\n本体を持たせたい場合は default void sample() { ... } のように書く必要があります。\n\n他の選択肢のように、メソッドを削除してクラス側で実装したり、例外が発生したり、単に"sample"と表示されることはありません。\n\nポイントは、インタフェースのメソッドに処理を書く場合は必ずdefault修飾子が必要というJavaの仕様です。',
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
                "インタフェースでdefaultメソッドとしてObjectクラスに定義されているメソッド（toStringやequalsなど）をオーバーライドすることはできません。\n\nJavaの仕様上、インタフェースのdefaultメソッドはObjectクラスのメソッドと競合するため、\nこのようなコードはコンパイルエラーとなります。\n\nしたがって、インタフェースでtoStringメソッドをdefaultで定義しようとすると、\nAインタフェースの定義部分でエラーになります。\n\n他の選択肢のようにBクラスや実行時にエラーが発生することはありません。\n\nポイントは、Objectクラス由来のメソッドはインタフェースのdefaultメソッドとして定義できないという仕様です。",
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
                "この問題は、インタフェースのデフォルトメソッドの呼び出しに関するJavaの仕様を問うものです。\n\nCクラスはBインタフェースを実装していますが、BはAを継承しているため、Aのデフォルトメソッドsample()を呼び出したい場合、\nA.super.sample(); のように書きたくなります。\n\nしかし、Javaではインタフェースを多重継承している場合、2階層以上の継承をまたいでsuperを使ってデフォルトメソッドを呼び出すことはできません。\n\nこのため、CクラスからA.super.sample(); のように直接呼び出すことはできず、他の選択肢も正しい記法ではありません。\n\n結果として、どの選択肢も正解ではなく「他の選択肢のいずれも誤りである」が正解となります。\n\nポイントは、インタフェースのデフォルトメソッド呼び出しは1階層までしかsuperで指定できないという仕様です。",
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
                "この問題は、複数のインタフェースで同じシグネチャのデフォルトメソッドが定義されている場合の動作を問うものです。\n\nMainクラスはAとBという2つのインタフェースを実装していますが、どちらにも同じ名前・引数のtestメソッドがデフォルトで定義されています。\n\nこの場合、どちらのtestメソッドを呼び出すべきかJavaが判断できず、曖昧さが生じるためコンパイルエラーとなります。\n\nこのような場合は、Mainクラスでtestメソッドを明示的にオーバーライドして曖昧さを解消する必要があります。\n\nポイントは、複数のインタフェースで同じデフォルトメソッドがある場合は必ず自分でオーバーライドしなければならないという仕様です。",
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
            answerIndex: [0, 2, 3],
            explanation:
                "抽象クラスについて、正しいポイントを整理します。\n\n・抽象クラスは直接インスタンス化できません。\n  → new演算子でオブジェクトを生成しようとするとコンパイルエラーになります。\n\n・抽象クラスの公開フィールド（publicなフィールド）は、サブクラスから自由にアクセスできます。\n  → アクセス修飾子がpublicであれば、サブクラスからも制限なく利用できます。\n\n・抽象クラスを継承した抽象クラスを定義することも可能です。\n  → 抽象クラス同士で継承関係を作ることができます。\n\n【補足】\n・抽象クラスのメソッドは、サブクラスでオーバーライドできます。\n・抽象メソッドは、すべての「具象サブクラス」（実体を持つクラス）で実装が必須ですが、抽象クラス同士の継承では未実装のまま残しても構いません。\n\nこのように、抽象クラスの特徴や継承のルールを正しく理解することが重要です。",
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
                'このプログラムでは、抽象クラスと抽象メソッドの動作が問われています。\n\n・AbstractSampleは抽象クラスで、sampleメソッド（具象メソッド）とtestメソッド（抽象メソッド）を持っています。\n\n・ConcreteSampleはAbstractSampleを継承し、testメソッドを実装しています。\n\n・mainメソッドでConcreteSampleのインスタンスをAbstractSample型で生成し、sampleメソッドを呼び出しています。\n\nsampleメソッドの流れ：\n1. "A"を表示\n2. test()を呼び出し → 実際にはConcreteSampleのtest()が呼ばれ"B"を表示\n3. "C"を表示\n\nこのように、抽象クラスの具象メソッド内で抽象メソッドを呼び出すと、実際のインスタンス側（サブクラス）の実装が実行されます。\n\nそのため、出力は「A」「B」「C」となります。\n\n抽象クラスの特徴や、動的バインディングの仕組みを理解することがポイントです。',
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
                "オーバーライド（上書き）を行う場合、元のメソッドと「引数リスト（型・数・順番）」が完全に一致している必要があります。\n\n引数リストが1つでも異なると、それはオーバーロード（多重定義）となり、オーバーライドにはなりません。\n\nまた、戻り値の型は「共変戻り値型」であれば変更可能です。つまり、元の戻り値型のサブクラス型であればOKです。\n\n抽象メソッドもサブクラスでオーバーライドできます。\n\nこのように、オーバーライドの条件は「引数リストが完全一致していること」が最も重要なポイントです。",
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
                "オーバーライド時のアクセス修飾子について説明します。\n\nスーパークラスのメソッドをサブクラスでオーバーライドする場合、\n元のメソッドと同じ、またはより広い（緩やかな）アクセス修飾子を付ける必要があります。\n\nたとえば、protectedなメソッドをpublicに拡張することは可能ですが、\n逆にprotectedよりも狭いアクセス修飾子（privateやデフォルト）にはできません。\n\nこのルールにより、サブクラスでpublicを指定することが適切です。\n\nアクセス修飾子の拡張はOKですが、制限することはできない点がポイントです。",
        },
        {
            id: 12,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "中級",
            question: "次のクラスを利用して正しい実行結果を選びなさい。",
            code: ' 1. class A {\n 2.     String val = "A";\n 3.     void print() {\n 4.         System.out.print(val);\n 5.     }\n 6. }\n 7. class B extends A {\n 8.     String val = "B";\n 9. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         A a = new A();\n 4.         A b = new B();\n 5.         System.out.print(a.val);\n 6.         System.out.print(b.val);\n 7.         a.print();\n 8.         b.print();\n 9.     }\n10. }',
            choices: [
                "「ABAB」と表示される",
                "「AAAA」と表示される",
                "「AAAB」と表示される",
                "Bクラスでコンパイルエラーが発生する",
                "Mainクラスでコンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                'このプログラムでは、フィールドとメソッドの参照の違いが問われています。\n\nAクラスとBクラスの両方にvalというフィールドがありますが、\nJavaではフィールドの参照は「変数の型」に依存します。\n\nbはA型で宣言されているため、b.valはAクラスのval（"A"）を参照します。\n\n一方、print()メソッドはAクラスで定義されており、\nメソッド内で参照するvalもAクラスのものになります。\n\nそのため、a.val, b.val, a.print(), b.print()のすべてで"A"が出力され、\n結果は「AAAA」となります。\n\nフィールドの参照は変数の型、メソッドの実行は実体（オブジェクト）に依存する点を理解することがポイントです。',
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
                "「work」と表示される",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "このプログラムでは、インタフェースとクラスの継承の仕組みが問われています。\n\nEngineerクラスはEmployeeクラスを継承し、さらにWorkerインタフェースを実装しています。\n\nEmployeeクラスにはwork()メソッドが定義されているため、Engineerクラスはwork()メソッドを自動的に継承します。\n\nmainメソッドでEngineer型のインスタンスをWorker型の変数に代入し、work()を呼び出すと、\nEmployeeクラスで定義されたwork()が実行されます。\n\nこのように、クラスの継承とインタフェースの実装が組み合わさっても、\n親クラスのメソッドが正しく呼び出される点がポイントです。\n\n結果として「work」と表示されます。",
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
                "このプログラムでは、変数の型によるメソッド呼び出しの可否が問われています。\n\nEngineerクラスはEmployeeクラスを継承し、Workerインタフェースも実装しています。\n\nmainメソッドでEngineer型のインスタンスをWorker型の変数aに代入していますが、\nWorkerインタフェースにはcreate()メソッドが定義されていないため、a.create()はコンパイルエラーとなります。\n\n一方、bはEmployee型、cはEngineer型なので、それぞれwork()やreport()、create()などEmployeeやEngineerで定義されたメソッドを呼び出すことができます。\n\nこのように、変数の型によって呼び出せるメソッドが制限される点がポイントです。",
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
                "問題のポイントを丁寧に解説します。\n\n・インタフェースは直接インスタンス化できません。\n  → new演算子でインタフェース型（new A()）のオブジェクトを生成しようとすると、コンパイルエラーになります。\n\n・BクラスはAインタフェースを実装しているため、B型のインスタンスはA型の配列に代入できます。\n  → new B() はOKです。\n\n・CクラスはBクラスを継承しているため、C型のインスタンスもA型の配列に代入できます。\n  → new C() もOKです。\n\n・DクラスはAインタフェースもBクラスも継承していないため、A型の配列に代入できません。\n  → new D() もコンパイルエラーです。\n\nこのように、インタフェースや継承関係を正しく理解し、\n「インタフェースはインスタンス化できない」「配列の型と代入するインスタンスの型の関係」に注意することが重要です。",
        },
        {
            id: 16,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "初級",
            question:
                "次のプログラムを確認してください。これらのクラスを利用する以下のプログラムを実行し、「hello」とコンソールに表示したい。4行目の空欄に入るコードとして、正しいものを選びなさい。",
            code: ' 1. class A {}\n\n 1. class B extends A {\n 2.     void hello() {\n 3.         System.out.println("hello");\n 4.     }\n 5. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         A a = new B();\n 4.         __________\n 5.         b.hello();\n 6.     }\n 7. }',
            choices: [
                "<code>A b = a;</code>",
                "<code>A b = new B();</code>",
                "<code>A b = (A) a;</code>",
                "<code>B b = a;</code>",
                "<code>B b = (A) a;</code>",
                "<code>B b = (B) a;</code>",
            ],
            answerIndex: 5,
            explanation:
                "この問題は、ダウンキャスト（型変換）とメソッド呼び出しの仕組みを理解することがポイントです。\n\n・変数aはA型ですが、実際にはB型のインスタンスが代入されています。\n  → 参照型はAですが、実体はBです。\n\n・Bクラスで定義されたhello()メソッドを呼び出すには、B型の変数が必要です。\n  → そのため、aをB型にキャストして新しい変数bに代入します。\n\n・B b = (B) a; のようにキャストすることで、b.hello()と呼び出せるようになります。\n\n・もしaが本当にB型のインスタンスでなければ、キャスト時に例外が発生しますが、今回はnew B()なので安全です。\n\nこのように、親クラス型の変数に子クラスのインスタンスが入っている場合、子クラスのメソッドを使うにはキャストが必要である点が重要です。",
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
                "この問題は、キャスト（型変換）と実際のインスタンスの型に関するJavaの動作を問うものです。\n\n・変数aはA型で、実際のインスタンスもA型です。\n\n・B型へのキャスト（B b = (B) a;）を行っていますが、aの実体はB型ではありません。\n\n・このように、親クラス型の変数に子クラス型でキャストしようとした場合、実際のインスタンスが子クラスでなければ実行時にClassCastExceptionが発生します。\n\n・このプログラムでは、キャスト自体はコンパイル時にはエラーになりませんが、実行時に例外がスローされます。\n\nこのように、キャスト時は「実体の型」に注意し、親クラス型の変数を子クラス型にキャストする場合は、実際に子クラスのインスタンスであることが必要です。",
        },
        {
            id: 18,
            category: "クラスの継承、インタフェース、抽象クラス",
            difficulty: "初級",
            question:
                "次のプログラムを確認してください。コンソールに「10」と表示するために、Sampleクラスの4行目の空欄に入るコードとして正しいものを選びなさい。（2つ選択）",
            code: " 1. class Sample {\n 2.     private int num;\n 3.     public Sample(int num) {\n 4.         __________\n 5.     }\n 6.     public int getNum() {\n 7.         return num;\n 8.     }\n 9.     public void setNum(int num) {\n10.         this.num = num;\n11.     }\n12. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample s = new Sample(10);\n 4.         System.out.println(s.getNum());\n 5.     }\n 6. }",
            choices: [
                "<code>this.num = num;</code>",
                "<code>this->num = num;</code>",
                "<code>num = num;</code>",
                "<code>setNum(num);</code>",
                "<code>super.setNum(num);</code>",
            ],
            answerIndex: [0, 3],
            explanation:
                "この問題は、コンストラクタでフィールドに値をセットする方法について問うものです。\n\n・Sampleクラスのnumフィールドはprivateなので、直接代入するにはthis.num = num;と書きます。\n  → thisを付けることで、フィールドと引数の区別ができます。\n\n・また、setNum(num);とメソッドを呼び出しても同じ結果になります。\n  → setNumメソッドは引数で受け取った値をnumフィールドに代入します。\n\n・num = num;のようにthisを付けずに代入すると、両方とも引数numを指すため、フィールドには値がセットされません。\n\n・super.setNum(num);は親クラスにsetNumメソッドがないため使えません。\n\n・this->num = num;はJavaの文法ではありません。\n\nこのように、フィールドに値をセットするにはthisを使うか、セッターメソッドを利用するのが正しい方法です。",
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
                'この問題は、親クラスと子クラスで同じ名前のフィールドを持つ場合の動作を問うものです。\n\n・ParentクラスとChildクラスの両方にnameフィールドがありますが、これは「隠蔽（シャドウイング）」と呼ばれます。\n\n・child.name = "sample"; で代入しているのはChildクラス側のnameフィールドです。\n\n・getName()メソッドはParentクラスで定義されており、this.nameはParentクラスのnameフィールドを参照します。\n\n・そのため、Childクラスのnameフィールドに値を代入しても、Parentクラスのnameフィールドには影響しません。\n\n・結果として、getName()の戻り値はnull（初期値）となり、コンソールにはnullが表示されます。\n\nこのように、同じ名前のフィールドが親子クラスで定義されている場合、それぞれ独立して管理される点に注意が必要です。',
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
                'この問題は、コンストラクタの呼び出し順序と継承の仕組みについて問うものです。\n\n・BクラスはAクラスを継承しています。\n\n・new B()でBクラスのインスタンスを生成すると、まずBクラスのコンストラクタが呼ばれます。\n\n・ただし、Bクラスのコンストラクタの最初で自動的に親クラス（Aクラス）のコンストラクタが呼び出されます。\n\n・そのため、Aクラスのコンストラクタで"A"が表示され、その後Bクラスのコンストラクタで"B"が表示されます。\n\n・結果として、コンソールには「A」「B」と順に表示されます。\n\nこのように、サブクラスのインスタンス生成時には必ず親クラスのコンストラクタが先に実行される点がポイントです。',
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
                'この問題は、コンストラクタの呼び出し順序とthis/superの使い方について問うものです。\n\n・Child(String)のコンストラクタが呼ばれると、最初にthis()でChild()の引数なしコンストラクタが呼ばれます。\n\n・Child()の中ではsuper("B")が呼ばれ、Parent(String)のコンストラクタが実行されます。\n\n・Parent(String)の中ではthis()でParent()の引数なしコンストラクタが呼ばれ、"A"が表示されます。\n\n・Parent(String)に戻り、"B"が表示されます。\n\n・Child()に戻り、"C"が表示されます。\n\n・最後にChild(String)に戻り、"D"が表示されます。\n\nこのように、コンストラクタ呼び出しが連鎖し、親クラスから順に処理されるため、出力は「A」「B」「C」「D」となります。\n\nコンストラクタの連鎖と呼び出し順序をしっかり理解することがポイントです。',
        },
    ],
};
