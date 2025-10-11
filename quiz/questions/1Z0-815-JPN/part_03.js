const Q_1Z0_815_JPN_03 = {
    prefix: "1Z0-815-JPN",
    part: "03",
    questions: [
        {
            id: 1,
            category: "演算子と判定構造",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int a = 3;\n 4.         int b = a += 5;\n 5.         System.out.println(a + b);\n 6.     }\n 7. }",
            choices: [
                "8が表示される",
                "10が表示される",
                "16が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "このプログラムでは、まずint型の変数aに3が代入されます。\n\n次に、a += 5; という式は、a = a + 5; と同じ意味です。\nこの式の結果、aの値は8になります。\n\n4行目では、int型の変数bに a += 5 の結果が代入されます。\na += 5 の評価結果は8なので、bにも8が代入されます。\n\n5行目のSystem.out.println(a + b); では、aとbの合計が表示されます。\naもbも8なので、8 + 8 = 16 となります。\n\nしたがって、実行結果は16が表示されます。",
        },
        {
            id: 2,
            category: "演算子と判定構造",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         int num = -10;\n 4.         System.out.println(10 * -num);\n 5.     }\n 6. }",
            choices: [
                "100が表示される",
                "-100が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                "このプログラムでは、まずint型の変数numに-10が代入されています。\n\n4行目の式では、-num という記述があります。これはnumの符号を反転させる演算で、-10の符号を反転すると10になります。\n\n次に、10 * -num の計算が行われます。-numの結果は10なので、10 * 10 となり、結果は100です。\n\nしたがって、画面には100が表示されます。\n\n符号反転演算子（マイナス記号）は、数値の正負を逆にする働きがあることに注意しましょう。",
        },
        {
            id: 3,
            category: "演算子と判定構造",
            difficulty: "中級",
            question: "次の式のうち、コンパイルエラーになるものを選びなさい。（3つ選択）",
            code: "",
            choices: [
                "byte a = 0b10000000;",
                "short b = 128 + 128;",
                "int c = 2 + 3L;",
                "float d = 10.0;",
            ],
            answerIndex: [0, 2, 3],
            explanation:
                "この問題は、Javaの変数宣言やリテラルの扱いに関する知識を問うものです。\n\nbyte a = 0b10000000;\nbyte型は-128から127までの範囲しか扱えません。0b10000000は2進数で128を表すため、byteの範囲を超えておりコンパイルエラーとなります。\n\nshort b = 128 + 128;\n128 + 128は256となり、short型の範囲内なのでエラーにはなりません。\n\nint c = 2 + 3L;\n3Lはlong型のリテラルです。int型とlong型を足すと結果はlong型となり、int型の変数に代入できないためコンパイルエラーとなります。\n\nfloat d = 10.0;\n10.0はdouble型のリテラルです。float型の変数に代入するには、10.0fのように末尾にfを付ける必要があります。fがない場合は型が一致せずコンパイルエラーとなります。\n\nこのように、型の範囲やリテラルの型に注意する必要があります。",
        },
        {
            id: 4,
            category: "演算子と判定構造",
            difficulty: "上級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int a = 10;\n 4.         int b = a++ + a + a-- - a-- + ++a;\n 5.         System.out.println(b);\n 6.     }\n 7. }",
            choices: [
                "7が表示される",
                "32が表示される",
                "33が表示される",
                "43が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                "このプログラムでは、複雑なインクリメント（++）やデクリメント（--）演算子の動作を理解する必要があります。\n\nまず、aには10が代入されています。\n\n4行目の計算式を左から順に評価していきます。\n\na++   → 10（aは11になる）\na      → 11\na--   → 11（aは10になる）\na--   → 10（aは9になる）\n++a   → 10（aは10になる）\n\nこれらを式に当てはめると、\n10 + 11 + 11 - 10 + 10\nとなりそうですが、実際には各演算子の評価タイミングに注意が必要です。\n\n正しくは、\n1. a++      → 10（a=11）\n2. a        → 11\n3. a--      → 11（a=10）\n4. a--      → 10（a=9）\n5. ++a      → 10（a=10）\n\nよって、10 + 11 + 11 - 10 + 10 = 32 となります。\n\nこのように、インクリメント・デクリメント演算子は評価順と副作用に注意が必要です。",
        },
        {
            id: 5,
            category: "演算子と判定構造",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         boolean a = true;\n 4.         boolean b = true;\n 5.         System.out.println(a <= b);\n 6.     }\n 7. }",
            choices: [
                "trueが表示される",
                "falseが表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "このプログラムでは、boolean型の変数aとbにtrueが代入されています。\n\n5行目で a <= b という比較演算子を使っていますが、Javaではboolean型に対して大小比較（<=, >=, <, >）を行うことはできません。\n\nboolean型はtrueかfalseの2値のみを持ち、数値のような大小関係は定義されていません。\n\nそのため、このコードはコンパイルエラーとなります。\n\n論理値の比較には==や!=は使えますが、大小比較は使えない点に注意しましょう。",
        },
        {
            id: 6,
            category: "演算子と判定構造",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int a = 10;\n 4.         int b = 10;\n 5.         if (10 < a && 10 < ++b) {\n 6.             a++;\n 7.         }\n 8.         System.out.println(a + b);\n 9.     }\n10. }",
            choices: [
                "20が表示される",
                "21が表示される",
                "22が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                "設問のプログラムでは、int型の変数aとbに10が代入されています。\n\n5行目のif文は「10 < a && 10 < ++b」です。\n\nまず「10 < a」を評価します。aは10なので「10 < 10」はfalseです。\n\nJavaの論理積（&&）は「ショートサーキット評価」と呼ばれ、左側がfalseの場合、右側は評価されません。\n\nそのため「10 < ++b」は実行されず、bの値は10のままです。\n\nif文のブロック（a++）も実行されません。\n\n最後に「System.out.println(a + b);」でaとbの合計が表示されます。\n\naもbも10なので、結果は20となります。\n\nこのように、&&演算子のショートサーキット評価により、右辺の++bが実行されない点がポイントです。",
        },
        {
            id: 7,
            category: "演算子と判定構造",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int a = 100, b = 20, c = 30;\n 4.         System.out.println(a % b * c + a / b);\n 5.     }\n 6. }",
            choices: [
                "5が表示される",
                "35が表示される",
                "90が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                "このプログラムでは、int型の変数aに100、bに20、cに30が代入されています。\n\n4行目の式「a % b * c + a / b」を順に計算します。\n\nまず、a % b は 100 % 20 で、20で割った余りは0です。\n次に、0 * c は 0 * 30 で0になります。\n\n次に、a / b は 100 / 20 で、整数同士の割り算なので結果は5です。\n\n最後に、0 + 5 で合計は5となります。\n\nこのように、演算子の優先順位や整数の割り算の結果に注意しましょう。",
        },
        {
            id: 8,
            category: "演算子と判定構造",
            difficulty: "上級",
            question: "次のクラスを利用するプログラムを実行したときの結果を選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     private int num;\n 3.     public Sample(int num) { this.num = num; }\n 4. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample s1 = new Sample(10);\n 4.         Sample s2 = s1;\n 5.         s1 = new Sample(10);\n 6.         System.out.println(s1 == s2);\n 7.     }\n 8. }",
            choices: [
                "trueが表示される",
                "falseが表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                "このプログラムでは、Sampleクラスのインスタンスを2つの変数で扱っています。\n\nまず、s1に新しいSample(10)のインスタンスを代入します。\n次に、s2にs1を代入することで、s1とs2は同じオブジェクトを参照します。\n\nその後、s1に新たにSample(10)のインスタンスを代入します。\nこの時点で、s1は新しいオブジェクトを参照し、s2は最初のオブジェクトを参照したままです。\n\n最後に「s1 == s2」を評価すると、参照しているオブジェクトが異なるためfalseとなります。\n\nこのように、同じ値で生成してもnewを使うと別のオブジェクトとなり、参照の比較では一致しません。",
        },
        {
            id: 9,
            category: "演算子と判定構造",
            difficulty: "上級",
            question:
                "equalsメソッドをオーバーライドしたクラスの挙動について正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     private int num;\n 3.     private String name;\n 4.     public Sample(int num, String name) { this.num=num; this.name=name; }\n 5.     public boolean equals(Object obj) {\n 6.         if(obj==null) return false;\n 7.         if(obj instanceof Sample) {\n 8.             Sample s=(Sample)obj;\n 9.             return s.num==this.num;\n10.         }\n11.         return false;\n12.     }\n13. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample a=new Sample(10,"a");\n 4.         Sample b=new Sample(10,"b");\n 5.         System.out.println(a.equals(b));\n 6.     }\n 7. }',
            choices: [
                "trueが表示される",
                "falseが表示される",
                "Sampleクラスでコンパイルエラーが発生する",
                "Mainクラスでコンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                "このプログラムでは、Sampleクラスのequalsメソッドがオーバーライドされています。\n\nequalsメソッドは、引数objがnullの場合はfalseを返します。\n次に、objがSample型であればキャストし、numフィールドの値が等しいかどうかを比較します。\n\nMainクラスでは、numが10でnameが異なる2つのSampleインスタンスを生成しています。\n\na.equals(b)を呼び出すと、nameは異なりますが、numが同じなのでtrueが返されます。\n\nこのように、equalsメソッドの実装によって、比較の基準が変わる点に注意しましょう。",
        },
        {
            id: 10,
            category: "演算子と判定構造",
            difficulty: "中級",
            question:
                "equalsの引数型がSampleである場合の挙動として正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     private int num;\n 3.     public Sample(int num){ this.num=num; }\n 4.     public boolean equals(Sample obj){\n 5.         if(obj==null) return false;\n 6.         return this.num==obj.num;\n 7.     }\n 8. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Object a=new Sample(10);\n 4.         Object b=new Sample(10);\n 5.         System.out.println(a.equals(b));\n 6.     }\n 7. }",
            choices: [
                "Sampleクラスでコンパイルエラーが発生する",
                "Mainクラスでコンパイルエラーが発生する",
                "trueと表示される",
                "falseと表示される",
                "実行時に例外がスローされる",
            ],
            answerIndex: 3,
            explanation:
                "このプログラムでは、Sampleクラスのequalsメソッドが「Sample型」を引数に持つ形で定義されています。\n\nMainクラスでは、Object型の変数aとbにSampleのインスタンスを代入しています。\n\na.equals(b)を呼び出すと、Objectクラスのequalsメソッド（デフォルトの参照比較）が呼ばれます。\nなぜなら、aの型がObjectであり、Sample型を引数に取るequalsはオーバーライドではなくオーバーロード扱いとなるためです。\n\nこのため、aとbは異なるインスタンスなのでfalseが表示されます。\n\nequalsメソッドを正しくオーバーライドするには、引数をObject型にする必要がある点に注意しましょう。",
        },
        {
            id: 11,
            category: "演算子と判定構造",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Object a = new Object();\n 4.         Object b = null;\n 5.         System.out.println(a.equals(b));\n 6.     }\n 7. }",
            choices: [
                "trueが表示される",
                "falseが表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                "このプログラムでは、Object型の変数aに新しいObjectインスタンスを、bにnullを代入しています。\n\n5行目でa.equals(b)を呼び出しています。\n\nObjectクラスのequalsメソッドは、引数がnullの場合は必ずfalseを返す仕様です。\n\nそのため、a.equals(b)の結果はfalseとなり、画面にはfalseが表示されます。\n\nこのように、equalsメソッドにnullを渡しても例外は発生せず、常にfalseが返る点に注意しましょう。",
        },
        {
            id: 12,
            category: "演算子と判定構造",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String a = "sample";\n 4.         String b = "sample";\n 5.         System.out.print(a == b);\n 6.         System.out.print(", ");\n 7.         System.out.println(a.equals(b));\n 8.     }\n 9. }',
            choices: [
                "「false, true」と表示される",
                "「false, false」と表示される",
                "「true, false」と表示される",
                "「true, true」と表示される",
            ],
            answerIndex: 3,
            explanation:
                "このプログラムでは、String型の変数aとbに同じ文字列リテラル「sample」を代入しています。\n\nJavaでは、同じ文字列リテラルは「文字列プール」と呼ばれる領域で共有されるため、aとbは同じオブジェクトを参照します。\n\nそのため、a == b の結果はtrueとなります。\n\nまた、a.equals(b)は文字列の内容が等しいかどうかを比較するメソッドで、aとbの内容は同じなのでtrueとなります。\n\nしたがって、画面には「true, true」と表示されます。\n\nこのように、文字列リテラルの参照の仕組みとequalsの違いに注意しましょう。",
        },
        {
            id: 13,
            category: "演算子と判定構造",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String a = new String("sample");\n 4.         String b = "sample";\n 5.         System.out.print(a == b);\n 6.         System.out.print(", ");\n 7.         System.out.println(a.equals(b));\n 8.     }\n 9. }',
            choices: [
                "「false, true」と表示される",
                "「false, false」と表示される",
                "「true, false」と表示される",
                "「true, true」と表示される",
            ],
            answerIndex: 0,
            explanation:
                'このプログラムでは、aにはnew String("sample")で生成した文字列オブジェクト、bには文字列リテラル"sample"が代入されています。\n\nnew Stringで生成した場合、同じ内容でも異なるオブジェクトとなるため、aとbは異なる参照を持ちます。\n\nそのため、a == b の結果はfalseとなります。\n\n一方、a.equals(b)は文字列の内容が等しいかどうかを比較するため、内容が同じであればtrueとなります。\n\nしたがって、画面には「false, true」と表示されます。\n\nこのように、==は参照の比較、equalsは内容の比較である点に注意しましょう。',
        },
        {
            id: 14,
            category: "演算子と判定構造",
            difficulty: "上級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String a = "abc";\n 4.         String b = new String("abc");\n 5.         int count = 0;\n 6.         if (a.intern() == "abc") { count++; }\n 7.         if (b.intern() == "abc") { count++; }\n 8.         if (a.intern() == b.intern()) { count++; }\n 9.         System.out.println(count);\n10.     }\n11. }',
            choices: ["0が表示される", "1が表示される", "2が表示される", "3が表示される"],
            answerIndex: 3,
            explanation:
                'このプログラムでは、aには文字列リテラル"abc"、bにはnew String("abc")で生成した文字列オブジェクトが代入されています。\n\n6行目のa.intern()は、aが文字列プール内の"abc"と同じ参照かを比較しています。aはもともとリテラルなのでtrueとなり、countが1増えます。\n\n7行目のb.intern()も、intern()によって文字列プール内の"abc"の参照が返されるため、"abc"と同じ参照となり、countがさらに1増えます。\n\n8行目では、a.intern()とb.intern()の参照を比較しています。どちらも文字列プール内の"abc"の参照なので、trueとなり、countがさらに1増えます。\n\n最終的にcountは3となり、画面には3が表示されます。\n\nこのように、intern()を使うことで異なる生成方法でも同じ文字列リテラルの参照を得られる点がポイントです。',
        },
        {
            id: 15,
            category: "演算子と判定構造",
            difficulty: "初級",
            question:
                "次のプログラムを実行し、「ok」と表示したい。4行目に入るコードとして正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int num = 10;\n 4.         __________\n 5.             System.out.println("ok");\n 6.     }\n 7. }',
            choices: [
                "<code>if (num <= 10)</code>",
                "<code>if num <= 10</code>",
                "<code>if (num <= 10) then</code>",
                "<code>if num <= 10 then</code>",
            ],
            answerIndex: 0,
            explanation:
                '設問のプログラムは、if文の条件式を正しく記述する知識を問うものです。\n\nJavaのif文は、必ず「if (条件式)」のように、条件式を丸括弧で囲む必要があります。\n\n「num <= 10」は、numが10以下であるかどうかを判定する条件式です。\n\nnumの値は10なので、条件式はtrueとなり、5行目のSystem.out.println("ok");が実行されます。\n\n一方、括弧がない記述やthenを付ける記述は、Javaの文法として誤りとなり、コンパイルエラーになります。\n\nしたがって、正しいif文の書き方は「if (num <= 10)」です。',
        },
        {
            id: 16,
            category: "演算子と判定構造",
            difficulty: "初級",
            question: "次のプログラムをコンパイル、実行したときの結果を選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         if (false)\n 4.         System.out.println("A");\n 5.         System.out.println("B");\n 6.     }\n 7. }',
            choices: [
                "「A」と表示される",
                "「B」と表示される",
                "「A」「B」と表示される",
                "何も表示されない",
            ],
            answerIndex: 1,
            explanation:
                'このプログラムは、if文の条件がfalseの場合の動作を問う問題です。\n\n3行目のif (false) は、条件が常にfalseとなるため、直後のSystem.out.println("A");は実行されません。\n\nif文に波括弧（{ }）がない場合、ifの直後の1文だけが条件に従って実行されます。\n\nそのため、5行目のSystem.out.println("B");はif文とは無関係に必ず実行されます。\n\n結果として、画面には「B」だけが表示されます。\n\nif文のブロック範囲や波括弧の省略による挙動に注意しましょう。',
        },
        {
            id: 17,
            category: "演算子と判定構造",
            difficulty: "中級",
            question: "次のプログラムをコンパイル、実行したときの結果を選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int num = 10;\n 4.         if (num < 10)\n 5.             System.out.println("A");\n 6.         else\n 7.             System.out.println("B");\n 8.         if (num == 10)\n 9.             System.out.println("C");\n10.     }\n11. }',
            choices: [
                "「A」「B」「C」が表示される",
                "「A」「C」が表示される",
                "「B」「C」が表示される",
                "「A」と表示される",
                "「B」と表示される",
                "「C」と表示される",
            ],
            answerIndex: 2,
            explanation:
                'このプログラムは、if-else文の分岐と条件判定の流れを理解する問題です。\n\nnumには10が代入されています。\n\nまず、4行目のif (num < 10) は、10 < 10 なので条件はfalseです。\nそのため、5行目のSystem.out.println("A");は実行されません。\n\nelse節に進み、7行目のSystem.out.println("B");が実行されます。\n\n次に、8行目のif (num == 10) は、10 == 10 なので条件はtrueです。\nそのため、9行目のSystem.out.println("C");が実行されます。\n\n結果として、画面には「B」「C」の順で表示されます。\n\nif-else文の分岐の流れと、条件式の判定結果による出力の違いに注意しましょう。',
        },
        {
            id: 18,
            category: "演算子と判定構造",
            difficulty: "中級",
            question: "次のプログラムをコンパイル、実行したときの結果を選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int num = 10;\n 4.         if (num == 100)\n 5.             System.out.println("A");\n 6.         else if (10 < num)\n 7.             System.out.println("B");\n 8.         else if (num == 10)\n 9.             System.out.println("C");\n10.         else if (num == 10)\n11.             System.out.println("D");\n12.     }\n13. }',
            choices: [
                "Cが表示される",
                "Dが表示される",
                "CとDが表示される",
                "何も表示されない",
                "コンパイルエラーが発生する",
                "実行時例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                'このプログラムは、if-else if文の分岐処理の流れを理解する問題です。\n\nnumには10が代入されています。\n\nまず、4行目のif (num == 100) は、10 == 100 なので条件はfalseです。\n\n次に、6行目のelse if (10 < num) も、10 < 10 なのでfalseです。\n\n続いて、8行目のelse if (num == 10) は、10 == 10 なので条件はtrueとなり、9行目のSystem.out.println("C");が実行されます。\n\nif-else if文は、上から順に判定し、最初に条件がtrueになった部分だけが実行されます。\nそのため、10行目以降のelse if (num == 10) やSystem.out.println("D");は無視されます。\n\n結果として、画面には「C」だけが表示されます。\n\nif-else if文の分岐は、最初にtrueになった箇所だけが実行される点に注意しましょう。',
        },
        {
            id: 19,
            category: "演算子と判定構造",
            difficulty: "中級",
            question: "switch文の条件式が戻せる型として正しいものをすべて選びなさい。",
            code: "",
            choices: ["char", "byte", "short", "int", "long", "String", "enum", "boolean"],
            answerIndex: [0, 1, 2, 3, 5, 6],
            explanation:
                "この問題は、Javaのswitch文で条件式に使える型について問うものです。\n\nJavaのswitch文では、条件式に使える型が決まっています。\n\n利用できるのは、char、byte、short、int、およびそれらのラッパークラス（Character、Byte、Short、Integer）、String、enum型です。\n\nlong型やboolean型はswitch文の条件式には使えません。\n\nしたがって、選択肢のうちchar、byte、short、int、String、enumが正解となります。\n\nswitch文の条件式で使える型はバージョンによって追加されたものもあるため、特にStringやenumが使えることも覚えておきましょう。",
        },
        {
            id: 20,
            category: "演算子と判定構造",
            difficulty: "上級",
            question:
                "次のプログラムをコンパイルしたときにエラーが発生する箇所をすべて選びなさい。",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         final int NUM = 0;\n 4.         int num = 10;\n 5.         switch(num) {\n 6.             case "10": System.out.println("A");\n 7.             break;\n 8.             case num: System.out.println("B");\n 9.             break;\n10.             case 2*5: System.out.println("C");\n11.             break;\n12.             case NUM: System.out.println("D");\n13.             break;\n14.         }\n15.     }\n16. }',
            choices: ["6行目", "8行目", "10行目", "12行目"],
            answerIndex: [0, 1],
            explanation:
                'この問題は、switch文のcaseラベルに指定できる値のルールを問うものです。\n\nJavaのswitch文では、caseラベルには「定数式」のみを指定できます。\n\n6行目のように文字列リテラル（"10"）は、switchの条件式がint型の場合は使えないためエラーとなります。\n\n8行目のように変数（num）は定数式ではないため、caseラベルとして使うことはできません。\n\n10行目のような計算式（2*5）は、値がコンパイル時に確定する定数式なのでcaseラベルとして利用できます。\n\n12行目のようにfinalで宣言された定数（NUM）は、値が変更されないためcaseラベルとして利用できます。\n\nしたがって、エラーとなるのは文字列リテラルや変数を使ったcaseラベルです。\n\ncaseラベルには「定数式のみ指定できる」というルールをしっかり覚えておきましょう。',
        },
        {
            id: 21,
            category: "演算子と判定構造",
            difficulty: "上級",
            question: "次のプログラムを実行したときに表示されるものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int num = 1;\n 4.         switch(num) {\n 5.             case 1:\n 6.             case 2:\n 7.             case 3: System.out.println("A");\n 8.             case 4: System.out.println("B");\n 9.             default: System.out.println("C");\n10.         }\n11.     }\n12. }',
            choices: [
                "「A」と表示される",
                "「A」「B」と表示される",
                "「A」「B」「C」と表示される",
                "何も表示されない",
                "コンパイルエラーが発生する",
                "実行時例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "このプログラムは、switch文でbreakがない場合の動作（フォールスルー）を理解する問題です。\n\nnumには1が代入されています。\n\nswitch文の条件式が1なので、case 1: から処理が始まります。\n\nこのプログラムでは、どのcaseにもbreak文がありません。\n\nそのため、case 1: に該当した後は、下に続くすべてのcaseやdefaultの処理が順番に実行されます。\n\n具体的には、\n・case 3: のSystem.out.printlnで1つ目の出力\n・case 4: のSystem.out.printlnで2つ目の出力\n・default: のSystem.out.printlnで3つ目の出力\nがすべて実行されます。\n\n結果として、画面には「A」「B」「C」の順で表示されます。\n\nswitch文では、breakがないと該当箇所から下の処理がすべて実行される「フォールスルー」という動作になる点に注意しましょう。",
        },
    ],
};
