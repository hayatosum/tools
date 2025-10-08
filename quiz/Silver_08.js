const JAVA_SILVER_1Z0_815_JPN_08 = {
    prefix: "1Z0-815-JPN_08",
    questions: [
        {
            id: 1,
            category: "関数型インタフェース、ラムダ式",
            difficulty: "中級",
            question:
                "次のプログラムを確認し、Mainクラスの空欄に入るコードとして、正しいものを選びなさい。（2つ選択）",
            code: ' 1. interface Algorithm {\n 2.     void perform(String name);\n 3. }\n\n 1. class Service {\n 2.     private Algorithm logic;\n 3.     public void setLogic(Algorithm logic) {\n 4.         this.logic = logic;\n 5.     }\n 6.     public void doProcess(String name) {\n 7.         System.out.println("start");\n 8.         this.logic.perform(name);\n 9.         System.out.println("end");\n10.     }\n11. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Algorithm algorithm = (＿＿＿＿＿) -> {\n 4.             System.out.println("hello, " + name);\n 5.         };\n 6.         Service s = new Service();\n 7.         s.setLogic(algorithm);\n 8.         s.doProcess("Lambda");\n 9.     }\n10. }',
            choices: ["()", "(name)", "(String)", "(String name)"],
            answerIndex: [1, 3],
            explanation:
                "Javaのラムダ式で引数が1つの場合、型を省略して (name) または型を明示して (String name) と記述できます。() は引数がない場合のみ有効で、(String) のように型だけで変数名がない書き方は文法エラーです。したがって、(name) と (String name) の2つが正しい記法です。",
        },
        {
            id: 2,
            category: "関数型インタフェース、ラムダ式",
            difficulty: "中級",
            question:
                "次のプログラムの // insert code here に入るコードとして、誤っているものを選びなさい。（2つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         // insert code here\n 4.         System.out.println(f.test("Lambda"));\n 5.     }\n 6.     private static interface Function {\n 7.         String test(String name);\n 8.     }\n 9. }',
            choices: [
                '<pre><code>Function f = (name) -> {\n    return "hello, " + name;\n};</pre></code>',
                '<pre><code>Function f = (name) -> {\n    "hello, " + name;\n};</pre></code>',
                '<pre><code>Function f = (name) -> return "hello, " + name;</pre></code>',
                '<pre><code>Function f = (name) -> "hello, " + name;</pre></code>',
                '<pre><code>Function f = name -> {\n    return "hello, " + name;\n};</pre></code>',
            ],
            answerIndex: [1, 2],
            explanation:
                "Javaのラムダ式では、return文を使う場合は必ず波括弧（{ ... }）で囲む必要があります。式のみを返す場合は括弧なしで記述できますが、return文を使う場合はブロックが必須です。例えば、return文がないまま値だけを記述したり、波括弧なしでreturn文を使うと文法エラーとなります。正しい例は、波括弧とreturn文をセットで使う、または式のみを返す場合です。引数が1つの場合は括弧を省略することもできます。",
        },
        {
            id: 3,
            category: "関数型インタフェース、ラムダ式",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String val = "A";\n 4.         Function f = (val) -> {\n 5.             System.out.println(val);\n 6.         };\n 7.         f.test("B");\n 8.     }\n 9. }\n10. \n11. interface Function {\n12.     void test(String val);\n13. }',
            choices: [
                "Aが表示される",
                "Bが表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "Javaでは、同じスコープ内で同じ名前の変数を2度宣言することはできません。設問のコードでは、mainメソッド内でString valを宣言し、さらにラムダ式の引数としてvalを宣言しているため、変数名が重複しコンパイルエラーとなります。",
        },
        {
            id: 4,
            category: "関数型インタフェース、ラムダ式",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         int cnt = 0;\n 4.         Runnable r = () -> {\n 5.             for (cnt = 0; cnt < 10; cnt++) {\n 6.                 System.out.println(cnt++);\n 7.             }\n 8.         };\n 9.     new Thread(r).start();\n10.     }\n11. }",
            choices: [
                "0123456789が表示される",
                "02468が表示される",
                "13579が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 3,
            explanation:
                "Javaのラムダ式内で外側のローカル変数（この場合cnt）を参照する場合、その変数はfinalまたは実質的final（値が再代入されない）でなければなりません。設問ではcntをfor文で再代入しているため、finalの条件を満たさずコンパイルエラーとなります。",
        },
        {
            id: 5,
            category: "関数型インタフェース、ラムダ式",
            difficulty: "中級",
            question:
                "次のプログラムを実行し、「ok」と表示したい。12行目の空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.Arrays;\n 2. import java.util.List;\n 3. import java.util.function.*;\n 4. \n 5. public class Main {\n 6.     public static void main(String[] args) {\n 7.         List<Sample> list = Arrays.asList(\n 8.         new Sample(10),\n 9.         new Sample(20),\n10.         new Sample(30));\n11. \n12.         ＿＿＿＿＿＿＿＿\n13. \n14.         if (x.test(new Sample(20))) {\n15.             System.out.println("ok");\n16.         }\n17.     }\n18. }\n19. \n20. class Sample {\n21.     private int num;\n22.     public Sample(int num) { this.num = num; }\n23.     public boolean equals(Object obj) {\n24.         if (!(obj instanceof Sample)) return false;\n25.         return this.num == ((Sample) obj).num;\n26.     }\n27. }',
            choices: [
                "<pre><code>Predicate&lt;Sample&gt; x = s -> list.contains(s);</pre></code>",
                "<pre><code>Supplier&lt;Sample&gt; x = s -> list.contains(s);</pre></code>",
                "<pre><code>Consumer&lt;Sample&gt; x = s -> list.contains(s);</pre></code>",
                "<pre><code>Function&lt;Sample&gt; x = s -> list.contains(s);</pre></code>",
            ],
            answerIndex: 0,
            explanation:
                "Predicate<T>はtestメソッド（引数Tを受けてbooleanを返す）を持つ関数型インタフェースです。list.contains(s)はbooleanを返すため、Predicate<Sample> x = s -> list.contains(s); のように記述するのが正しいです。SupplierやConsumer、Functionにはtestメソッドがないため、これらの型ではif文でx.test(...)のような呼び出しはできません。",
        },
        {
            id: 6,
            category: "関数型インタフェース、ラムダ式",
            difficulty: "初級",
            question:
                "java.util.functionパッケージに属する関数型インタフェースで、引数を受け取らず、結果を戻すためのものを選びなさい。（1つ選択）",
            code: "",
            choices: ["Consumer", "Function", "Supplier", "Predicate"],
            answerIndex: 2,
            explanation:
                "Supplierは引数を受け取らず、結果だけを返す関数型インタフェースです。Consumerは引数を受け取り処理のみ行い値を返さず、Functionは引数を受けて結果を返し、Predicateは引数を受けて真偽値（boolean）を返します。",
        },
        {
            id: 7,
            category: "関数型インタフェース、ラムダ式",
            difficulty: "中級",
            question: "次のプログラムの空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.function.*;\n 2. \n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         ＿＿＿＿＿＿＿＿ <String, Integer> func = (str) -> {\n 6.             return Integer.parseInt(str);\n 7.         };\n 8.         System.out.println(func.apply("100") * 2);\n 9.     }\n10. }',
            choices: ["Consumer", "Function", "Supplier", "Predicate"],
            answerIndex: 1,
            explanation:
                "Function<T,R>はT型の引数を受け取りR型の値を返す関数型インタフェースです。設問のようにFunction<String, Integer> func = ...とすれば、func.apply(文字列)でInteger型の値を返すことができます。Consumerは値を返さず、Supplierは引数を取らず、Predicateは真偽値を返すため、いずれもこの用途には適しません。",
        },
        {
            id: 8,
            category: "関数型インタフェース、ラムダ式",
            difficulty: "初級",
            question:
                "java.util.function.Consumerの説明として、正しいものを選びなさい。（1つ選択）",
            code: "",
            choices: [
                "引数を受け取り、その値を使って処理だけ行い、結果は戻さない",
                "引数を受け取らずに、結果だけを戻す",
                "引数を受け取り判定を行う",
                "引数を受け取り、それを使って何らかの処理をし、その処理結果を戻す",
            ],
            answerIndex: 0,
            explanation:
                "Consumerは1つの引数を受け取り、その値を使って何らかの処理（副作用）を行いますが、値は返しません（戻り値はvoid型）。例えばリストへの追加や標準出力など、値を消費する用途で使われます。",
        },
    ],
};
