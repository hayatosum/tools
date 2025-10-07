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
                "ラムダ式の引数は、型を省略して (name) と書くか、型を明示して (String name) と書けます。() や (String) は文法的に不正です。",
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
                "ラムダ式では return を使う場合ブロックが必要です。選択肢BやCは文法的に不正です。その他の記述は有効です。",
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
                "ラムダ式を宣言しているブロックで宣言したローカル変数と同じ名前の変数は、ラムダ式内で宣言できない。設問では同じ名前の変数を重複して宣言していることにより、コンパイルエラーが発生する。",
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
                "ラムダ式から式を宣言しているメソッドのローカル変数にアクセスする場合、その変数は実質的にfinalでなければならない。設問ではcntがループ内で更新されているため、コンパイルエラーが発生する。",
        },
        {
            id: 5,
            category: "関数型インタフェース、ラムダ式",
            difficulty: "中級",
            question:
                "次のプログラムを実行し、「ok」と表示したい。12行目の空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.Arrays;\n 2. import java.util.List;\n 3. import java.util.function.*;\n 4. \n 5. public class Main {\n 6.     public static void main(String[] args) {\n 7.         List<Sample> list = Arrays.asList(\n 8.         new Sample(10),\n 9.         new Sample(20),\n10.         new Sample(30));\n11. \n12.         ＿＿＿＿＿＿＿＿\n13. \n14.         if (x.test(new Sample(20))) {\n15.             System.out.println("ok");\n16.         }\n17. }\n18. }\n19. \n20. class Sample {\n21.     private int num;\n22.     public Sample(int num) { this.num = num; }\n23.     public boolean equals(Object obj) {\n24.         if (!(obj instanceof Sample)) return false;\n25.         return this.num == ((Sample) obj).num;\n26.     }\n27. }',
            choices: [
                "<pre><code>Predicate<Sample> x = s -> list.contains(s);</pre></code>",
                "<pre><code>Supplier<Sample> x = s -> list.contains(s);</pre></code>",
                "<pre><code>Consumer<Sample> x = s -> list.contains(s);</pre></code>",
                "<pre><code>Function<Sample> x = s -> list.contains(s);</pre></code>",
            ],
            answerIndex: 0,
            explanation:
                "test メソッドを持つ Predicate が正しい。Supplier や Consumer、Function には test メソッドがないため不正です。",
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
                "Supplier は引数を取らず、結果を返す関数型インタフェースです。Consumer は値を消費する、Function は引数を受けて結果を返す、Predicate は真偽値を返します。",
        },
        {
            id: 7,
            category: "関数型インタフェース、ラムダ式",
            difficulty: "中級",
            question: "次のプログラムの空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.function.*;\n 2. \n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         ＿＿＿＿＿＿＿＿ (String, Integer) func = (str) -> {\n 6.             return Integer.parseInt(str);\n 7.         };\n 8.         System.out.println(func.apply("100") * 2);\n 9.     }\n10. }',
            choices: ["Consumer", "Function", "Supplier", "Predicate"],
            answerIndex: 1,
            explanation:
                "Function<T,R> は T を受け取り R を返すインタフェースです。ここでは String を受け取り Integer を返すため Function が正解です。",
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
                "Consumer は引数を受け取り、何らかの処理をするが戻り値は返さないインタフェースです。",
        },
    ],
};
