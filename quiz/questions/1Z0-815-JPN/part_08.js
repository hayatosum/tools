const Q_1Z0_815_JPN_08 = {
    prefix: "1Z0-815-JPN",
    part: "08",
    questions: [
        {
            id: 1,
            category: "関数型インタフェース、ラムダ式",
            difficulty: "中級",
            question:
                "次のプログラムを確認し、Mainクラスの空欄に入るコードとして、正しいものを選びなさい。（2つ選択）",
            code: ' 1. interface Algorithm {\n 2.     void perform(String name);\n 3. }\n\n 1. class Service {\n 2.     private Algorithm logic;\n 3.     public void setLogic(Algorithm logic) {\n 4.         this.logic = logic;\n 5.     }\n 6.     public void doProcess(String name) {\n 7.         System.out.println("start");\n 8.         this.logic.perform(name);\n 9.         System.out.println("end");\n10.     }\n11. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Algorithm algorithm = (＿＿＿＿＿) -> {\n 4.             System.out.println("hello, " + name);\n 5.         };\n 6.         Service s = new Service();\n 7.         s.setLogic(algorithm);\n 8.         s.doProcess("Lambda");\n 9.     }\n10. }',
            choices: [
                "<code>()</code>",
                "<code>(name)</code>",
                "<code>(String)</code>",
                "<code>(String name)</code>",
            ],
            answerIndex: [1, 3],
            explanation:
                "Javaのラムダ式で引数が1つの場合、次の2通りの書き方ができます。\n\n・型を省略して、変数名だけを書く（例: (name)）\n・型と変数名の両方を書く（例: (String name)）\n\nこの問題のAlgorithmインタフェースは、void perform(String name) という1つの引数を持つメソッドです。\n\nしたがって、(name) や (String name) のどちらも正しい記法です。\n\n一方、() は引数がない場合のみ使えます。\n(String) のように型だけで変数名がない書き方は文法エラーです。\n\nこのように、引数の数や型、変数名の有無に注意してラムダ式を記述する必要があります。",
        },
        {
            id: 2,
            category: "関数型インタフェース、ラムダ式",
            difficulty: "中級",
            question:
                "次のプログラムの // insert code here に入るコードとして、誤っているものを選びなさい。（2つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         // insert code here\n 4.         System.out.println(f.test("Lambda"));\n 5.     }\n 6.     private static interface Function {\n 7.         String test(String name);\n 8.     }\n 9. }',
            choices: [
                '<code>Function f = (name) -> { return "hello, " + name; };</code>',
                '<code>Function f = (name) -> { "hello, " + name; };</code>',
                '<code>Function f = (name) -> return "hello, " + name;</code>',
                '<code>Function f = (name) -> "hello, " + name;</code>',
                '<code>Function f = name -> { return "hello, " + name; };</code>',
            ],
            answerIndex: [1, 2],
            explanation:
                'Javaのラムダ式では、記述方法によって文法エラーになる場合があります。\n\n・波括弧 { } を使う場合は、必ずreturn文で値を返す必要があります。\n  例: (name) -> { return "hello, " + name; }\n\n・波括弧 { } の中で値だけを書く（returnを書かない）と、何も返さないため文法エラーです。\n\n・波括弧なしでreturn文だけを書くこともできません。returnは波括弧内でのみ使えます。\n\n・式だけを返す場合は、波括弧もreturnも不要です。\n  例: (name) -> "hello, " + name\n\n・引数が1つの場合は、括弧を省略して name -> ... のようにも書けます。\n\nこのように、ラムダ式の構文ルールに従わないとコンパイルエラーになります。',
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
                "このプログラムでは、mainメソッド内でString型の変数valを宣言し、さらにラムダ式の引数としてもvalという名前を使っています。\n\nJavaでは、同じスコープ内で同じ名前の変数を2回宣言することはできません。\n\nこの場合、mainメソッドのローカル変数valと、ラムダ式の引数valが重複しているため、コンパイルエラーとなります。\n\nラムダ式の引数名は、外側の変数名と重複しないように注意する必要があります。",
        },
        {
            id: 4,
            category: "関数型インタフェース、ラムダ式",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         int cnt = 0;\n 4.         Runnable r = () -> {\n 5.             for (cnt = 0; cnt < 10; cnt++) {\n 6.                 System.out.println(cnt++);\n 7.             }\n 8.         };\n 9.         new Thread(r).start();\n10.     }\n11. }",
            choices: [
                "0123456789が表示される",
                "02468が表示される",
                "13579が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 3,
            explanation:
                "このプログラムでは、ラムダ式内で外側のローカル変数cntを参照し、さらにfor文の中でcntに再代入を行っています。\n\nJavaでは、ラムダ式や匿名クラスの中で参照できるローカル変数は「final」または「実質的final」（値が再代入されない）でなければなりません。\n\n設問のコードでは、cntの値をfor文で何度も変更しているため、この条件を満たさず、コンパイルエラーとなります。\n\nラムダ式内でローカル変数を使う場合は、再代入しないように注意が必要です。",
        },
        {
            id: 5,
            category: "関数型インタフェース、ラムダ式",
            difficulty: "中級",
            question:
                "次のプログラムを実行し、「ok」と表示したい。12行目の空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.Arrays;\n 2. import java.util.List;\n 3. import java.util.function.*;\n 4. \n 5. public class Main {\n 6.     public static void main(String[] args) {\n 7.         List<Sample> list = Arrays.asList(\n 8.         new Sample(10),\n 9.         new Sample(20),\n10.         new Sample(30));\n11. \n12.         ＿＿＿＿＿＿＿＿\n13. \n14.         if (x.test(new Sample(20))) {\n15.             System.out.println("ok");\n16.         }\n17.     }\n18. }\n19. \n20. class Sample {\n21.     private int num;\n22.     public Sample(int num) { this.num = num; }\n23.     public boolean equals(Object obj) {\n24.         if (!(obj instanceof Sample)) return false;\n25.         return this.num == ((Sample) obj).num;\n26.     }\n27. }',
            choices: [
                "<code>Predicate<Sample> x = s -> list.contains(s);</code>",
                "<code>Supplier<Sample> x = s -> list.contains(s);</code>",
                "<code>Consumer<Sample> x = s -> list.contains(s);</code>",
                "<code>Function<Sample> x = s -> list.contains(s);</code>",
            ],
            answerIndex: 0,
            explanation:
                "この問題では、if文でx.test(new Sample(20))と呼び出しているため、xはtestメソッドを持つ関数型インタフェースである必要があります。\n\nPredicate<T>は、引数Tを受けてbooleanを返すtestメソッドを持っています。\n\nlist.contains(s)は、リストにsが含まれていればtrueを返すので、Predicate<Sample> x = s -> list.contains(s); のように記述するのが正しいです。\n\nSupplierやConsumer、Functionにはtestメソッドがないため、これらの型ではx.test(...)のような呼び出しはできません。\n\nこのように、ラムダ式の型とメソッドの対応関係に注意する必要があります。",
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
                "Supplierは、引数を受け取らず、結果だけを返す関数型インタフェースです。\n\nConsumerは引数を受け取り、何らかの処理を行いますが値は返しません。\nFunctionは引数を受け取り、結果を返します。\nPredicateは引数を受け取り、真偽値（boolean）を返します。\n\nこのように、Supplierだけが「引数なし・値を返す」インタフェースです。",
        },
        {
            id: 7,
            category: "関数型インタフェース、ラムダ式",
            difficulty: "中級",
            question: "次のプログラムの空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.function.*;\n 2. \n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         ＿＿＿＿＿＿＿＿ <String, Integer> func = (str) -> {\n 6.             return Integer.parseInt(str);\n 7.         };\n 8.         System.out.println(func.apply("100") * 2);\n 9.     }\n10. }',
            choices: [
                "<code>Consumer</code>",
                "<code>Function</code>",
                "<code>Supplier</code>",
                "<code>Predicate</code>",
            ],
            answerIndex: 1,
            explanation:
                'Function<T, R>は、T型の引数を受け取り、R型の値を返す関数型インタフェースです。\n\nこのプログラムでは、文字列を受け取り、Integer型の値を返すラムダ式を使っています。\n\nfunc.apply("100") のように、applyメソッドで文字列を渡すと、Integer.parseInt(str) により整数値が返されます。\n\nConsumerは値を返さず、Supplierは引数を取らず、Predicateは真偽値を返すため、いずれもこの用途には適しません。\n\nこのように、引数と戻り値の型に合わせて適切な関数型インタフェースを選ぶ必要があります。',
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
                "Consumerは、1つの引数を受け取り、その値を使って何らかの処理（副作用）を行いますが、値は返しません（戻り値はvoid型）という特徴があります。\n\n例えば、リストへの追加や標準出力への出力など、「値を消費する」用途で使われます。\n\n結果を返すことはなく、処理だけを行う点が他の関数型インタフェースとの違いです。",
        },
    ],
};
