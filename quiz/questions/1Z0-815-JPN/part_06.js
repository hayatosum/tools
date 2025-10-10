const Q_1Z0_815_JPN_06 = {
    prefix: "1Z0-815-JPN",
    part: "06",
    questions: [
        {
            id: 1,
            category: "インスタンスとメソッド",
            difficulty: "初級",
            question:
                "次のプログラムを確認してください。このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Item {\n 2.     private int num = 10;\n 3.     public void setNum(int num) {\n 4.         this.num = num;\n 5.     }\n 6.     public int getNum() {\n 7.         return this.num;\n 8.     }\n 9. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Item a = new Item();\n 4.         Item b = new Item();\n 5.         b.setNum(20);\n 6.         System.out.println(a.getNum());\n 7.     }\n 8. }",
            choices: [
                "0が表示される",
                "10が表示される",
                "20が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                "aとbは別のインスタンスなので、bのsetNum(20)はaには影響しません。a.getNum()は初期値10を返します。",
        },
        {
            id: 2,
            category: "インスタンスとメソッド",
            difficulty: "中級",
            question:
                "次のプログラムを確認してください。このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Item {\n 2.     public String name;\n 3.     public int price;\n 4.     public void printInfo() {\n 5.         System.out.println(name + ", " + price);\n 6.     }\n 7. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Item a = new Item();\n 4.         Item b = new Item();\n 5.         a.name = "apple";\n 6.         b.price = 100;\n 7.         a.price = 200;\n 8.         b.name = "banana";\n 9.         a = b;\n10.         a.printInfo();\n11.     }\n12. }',
            choices: [
                "apple,100",
                "banana,100",
                "apple,200",
                "banana,200",
                "実行時に例外がスローされる",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 1,
            explanation:
                "a = b によりaがbを参照するようになります。したがってa.printInfo()はbのnameとpriceを表示し、「banana,100」と出力されます。",
        },
        {
            id: 3,
            category: "インスタンスとメソッド",
            difficulty: "初級",
            question:
                "次のプログラムを実行し、「NULL」と表示したい。3行目の空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         __________\n 4.         System.out.println(obj);\n 5.     }\n 6. }",
            choices: [
                "Object obj = null;",
                "Object obj = false;",
                "Object obj = NULL;",
                'Object obj = "";',
                "他の選択肢のどれでも可能である",
                "他の選択肢はすべて誤りである",
            ],
            answerIndex: 5,
            explanation:
                "Object obj = null; とした場合、出力内容は「null」となる。参照を保持していないことを表現するためのリテラルは「null」であり、nullは「NULL」と表現できない。",
        },
        {
            id: 4,
            category: "インスタンスとメソッド",
            difficulty: "中級",
            question:
                "次のプログラムを実行し、行付近が終了したときにガーベジコレクションの対象となるインスタンスはどれか。正しい説明を選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Object a = new Object();\n 4.         Object b = new Object();\n 5.         Object c = a;\n 6.         a = null;\n 7.         b = null;\n 8.         // more code\n 9.     }\n10. }",
            choices: [
                "3行目で作成したインスタンスだけが対象",
                "4行目で作成したインスタンスだけが対象",
                "3行目と4行目両方のインスタンスが対象",
                "対象となるインスタンスは存在しない",
            ],
            answerIndex: 1,
            explanation:
                "最後にaもbもnullになっており、3行目と4行目のオブジェクトに参照が残っていないため、両方がGCの対象となります。",
        },
        {
            id: 5,
            category: "インスタンスとメソッド",
            difficulty: "中級",
            question:
                "次のプログラムを確認してください。このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     static int num = 0;\n 3. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample.num = 10;\n 4.         Sample s = new Sample();\n 5.         Sample s2 = new Sample();\n 6.         s.num += 10;\n 7.         s2.num = 30;\n 8.         System.out.println(Sample.num);\n 9.     }\n10. }",
            choices: [
                "10が表示される",
                "20が表示される",
                "30が表示される",
                "Mainクラスの3行目でコンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "static変数はクラス全体で共有されるため、最終的にnumは30になり「30」と表示されます。",
        },
        {
            id: 6,
            category: "インスタンスとメソッド",
            difficulty: "中級",
            question: "次の中から、正しい説明を選びなさい。（2つ選択）",
            code: "",
            choices: [
                "staticメソッドからは、staticメソッドを呼び出せない",
                "staticメソッドからは、staticではないフィールドにアクセスできる",
                "staticメソッドからは、staticではないメソッドを呼び出せる",
                "staticメソッドからは、staticフィールドにアクセスできる",
                "staticではないメソッドからは、staticフィールドにアクセスできる",
                "staticではないメソッドからは、staticメソッドを呼び出せない",
            ],
            answerIndex: [3, 4],
            explanation:
                "staticはインスタンスに依存しないため、staticメソッド/フィールドにはアクセス可能ですが、インスタンス変数やインスタンスメソッドにはアクセスできません。",
        },
        {
            id: 7,
            category: "インスタンスとメソッド",
            difficulty: "初級",
            question:
                "次のクラスのhelloメソッドを呼び出し、コンソールに「hello」と表示したい。4行目の空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     public void hello() {\n 3.         System.out.println("hello");\n 4.     }\n 5. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample sample = new Sample();\n 4.         __________\n 5.     }\n 6. }',
            choices: [
                "hello;",
                "hello();",
                "Sample.hello;",
                "Sample.hello();",
                "sample.hello();",
                "sample.hello",
            ],
            answerIndex: 4,
            explanation:
                "インスタンスメソッドはオブジェクトを生成し、その参照を用いて呼び出す必要があります。正しくはsample.hello();です。",
        },
        {
            id: 8,
            category: "インスタンスとメソッド",
            difficulty: "中級",
            question:
                "次のプログラムを確認してください。このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     public int add(Integer a, Integer b) {\n 3.         return a + b;\n 4.     }\n 5. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample s = new Sample();\n 4.         System.out.println(s.add(10, null));\n 5.     }\n 6. }",
            choices: [
                "10と表示される",
                "10nullと表示される",
                "voidと表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 4,
            explanation:
                "nullをIntegerに渡すと、アンボクシング時にNullPointerExceptionが発生します。",
        },
        {
            id: 9,
            category: "インスタンスとメソッド",
            difficulty: "初級",
            question:
                "次のプログラムの5行目に記述できるコードとして、正しいものを選びなさい。（2つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int a = 1;\n 4.         int b = 2;\n 5.         __________\n 6.         int c = b;\n 7.     }\n 8. }",
            choices: [
                "System.out.println(a);",
                "System.out.println(b + 2);",
                "System.out.println(c);",
                "System.out.println(d);",
            ],
            answerIndex: [0, 1],
            explanation: "aとbは宣言済みで利用可能です。dは未定義なのでエラーになります。",
        },
        {
            id: 10,
            category: "インスタンスとメソッド",
            difficulty: "初級",
            question: "次の中から、メソッド宣言の記述として正しいものを選びなさい。（1つ選択）",
            code: "",
            choices: [
                "<code>Void sample() { }</code>",
                '<code>void sample() { return "sample"; }</code>',
                "<code>sample() { }</code>",
                '<code>int sample() { return "sample"; }</code>',
                "<code>void sample() { }</code>",
            ],
            answerIndex: 4,
            explanation:
                "Javaではメソッドの戻り値型は小文字のvoidです。Voidはクラス型のため誤りです。",
        },
        {
            id: 11,
            category: "インスタンスとメソッド",
            difficulty: "中級",
            question:
                "次のプログラムを確認してください。このクラスを利用する以下のプログラムの説明として正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     private String value;\n 3.     public void setValue(String value) {\n 4.         this.value = value;\n 5.     }\n 6.     public String getValue() {\n 7.         return this.value;\n 8.     }\n 9. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample s = new Sample();\n 4.         String val = s.setValue("hello");\n 5.         s.getValue();\n 6.         System.out.println(val);\n 7.     }\n 8. }',
            choices: [
                "Mainクラスの4行目でコンパイルエラーが発生する",
                "Mainクラスの5行目でコンパイルエラーが発生する",
                "Mainクラスの4行目と5行目でコンパイルエラーが発生する",
                "何も表示されない",
                "nullが表示される",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                "setValueメソッドの戻り値はvoidであり、String型変数に代入できないため、4行目でコンパイルエラーになります。",
        },
        {
            id: 12,
            category: "インスタンスとメソッド",
            difficulty: "中級",
            question:
                "次のプログラムを確認してください。このクラスを利用する以下のプログラムの空欄に入るコードとして、正しいものを選びなさい。（2つ選択）",
            code: " 1. public class Sample {\n 2.     float divide(int a, int b) {\n 3.         return (float) a / (float) b;\n 4.     }\n 5. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample s = new Sample();\n 4.         _____ result = s.divide(10, 2);\n 5.         System.out.println(result);\n 6.     }\n 7. }",
            choices: ["int", "float", "double", "Integer", "String", "dim"],
            answerIndex: [1, 2],
            explanation:
                "divideの戻り値はfloatなので、変数resultの型はfloatまたは暗黙的にdoubleへ代入することが可能です。",
        },
        {
            id: 13,
            category: "インスタンスとメソッド",
            difficulty: "初級",
            question:
                "次のプログラムを確認してください。このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     public int method(int a, int b) {\n 3.         return a + b;\n 4.     }\n 5. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample s = new Sample();\n 4.         int result = s.method(2);\n 5.         System.out.println(result);\n 6.     }\n 7. }",
            choices: [
                "0が表示される",
                "2が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "methodメソッドは2つの引数を必要としますが、呼び出し時に引数が1つしか渡されていないためコンパイルエラーになります。",
        },
        {
            id: 14,
            category: "インスタンスとメソッド",
            difficulty: "中級",
            question: "次の中から、メソッドの宣言として正しいものをすべて選びなさい。",
            code: "",
            choices: [
                "<code>void method(void) { }</code>",
                "<code>void method(int values...) { }</code>",
                "<code>void method(int... values, String name) { }</code>",
                "<code>void method(int... a, int... b) { }</code>",
                "他の選択肢はすべて誤っている",
            ],
            answerIndex: 1,
            explanation: "可変長引数は最後にしか置けません。",
        },
        {
            id: 15,
            category: "インスタンスとメソッド",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     public void method(int num) {\n 3.         if (num < 0) return;\n 4.         System.out.println("A");\n 5.         return;\n 6.         System.out.println("B");\n 7.     }\n 8. }',
            choices: [
                "3行目でコンパイルエラーが発生する",
                "5行目でコンパイルエラーが発生する",
                "6行目でコンパイルエラーが発生する",
                "「A」と表示される",
                "「A」「B」と表示される",
            ],
            answerIndex: 2,
            explanation:
                'returnの後にSystem.out.println("B"); が書かれており、到達不能文となるためコンパイルエラーです。',
        },
        {
            id: 16,
            category: "インスタンスとメソッド",
            difficulty: "上級",
            question: "次のメソッドをオーバーロードしていないメソッド定義を選びなさい。（2つ選択）",
            code: " 1. int calc(double a, int b) {\n 2.     return (int)(a + b);\n 3. }",
            choices: [
                "<code>int calc(int a) {}</code>",
                "<code>double calc(double a, int b) {}</code>",
                "<code>int calc(double a, double b) {}</code>",
                "<code>int calc(double num1, int num2) {}</code>",
                "<code>int calc() {}</code>",
                "<code>int calc(int a, double b) {}</code>",
            ],
            answerIndex: [1, 3],
            explanation:
                "オーバーロードは引数の型や個数で区別されます。`double calc(double a, int b)` は戻り値型だけが異なるためオーバーロードにならず、また `int calc(double num1, int num2)` は引数リストが同一であるため同じシグネチャになりコンパイルエラーです。",
        },
        {
            id: 17,
            category: "インスタンスとメソッド",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものをすべて選びなさい。",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Main m = new Main();\n 4.         System.out.println(m.calc(2, 3));\n 5.     }\n 6.     private double calc(double a, int b) {\n 7.         return (a + b) / 2;\n 8.     }\n 9.     private double calc(int a, double b) {\n10.         return (a + b) / 2;\n11.     }\n12. }",
            choices: [
                "4行目でコンパイルエラーが発生する",
                "6行目でコンパイルエラーが発生する",
                "9行目でコンパイルエラーが発生する",
                "2.5が表示される",
            ],
            answerIndex: 3,
            explanation:
                "オーバーロードされた2つのcalcメソッドのどちらが呼ばれても `(2+3)/2` の計算結果は 2.5 となる。",
        },
        {
            id: 18,
            category: "インスタンスとメソッド",
            difficulty: "初級",
            question:
                "次のメソッドをオーバーロードするメソッド定義として、正しいものを選びなさい。（1つ選択）",
            code: " 1. void method() {\n 2.     // do something\n 3. }",
            choices: [
                "public void method() {}",
                "protected void method() {}",
                "private void method() {}",
                "他の選択肢はすべて正しい",
                "他の選択肢はすべて誤りである",
            ],
            answerIndex: 3,
            explanation: "アクセス修飾子が異なるだけではオーバーロードと見なされない。",
        },
        {
            id: 19,
            category: "インスタンスとメソッド",
            difficulty: "初級",
            question:
                "Sampleというクラスを定義しようと考えている。このクラスに定義するコンストラクタを修飾できるアクセス修飾子についての説明として、正しいものを選びなさい。（1つ選択）",
            code: " 1. class Sample {\n 2.     // コンストラクタ定義\n 3. }",
            choices: [
                "publicおよびコンストラクタの定義できる",
                "publicやprotectedでコンストラクタの定義できる",
                "private以外のコンストラクタが定義できる",
                "コンストラクタを修飾するアクセス修飾子に制限はない",
                "アクセス修飾子で修飾することはできない",
            ],
            answerIndex: 3,
            explanation:
                "コンストラクタには public, protected, private を含む全てのアクセス修飾子を使用できる。",
        },
        {
            id: 20,
            category: "インスタンスとメソッド",
            difficulty: "中級",
            question:
                "次のプログラムを確認してください。このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     void Sample() {\n 3.         System.out.println("hello.");\n 4.     }\n 5. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample s = new Sample();\n 4.         s.Sample();\n 5.     }\n 6. }',
            choices: [
                "「hello.」と表示される",
                "「hello.hello.」と表示される",
                "Sampleクラスでコンパイルエラーが発生する",
                "Mainクラスでコンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                "Sample() はコンストラクタではなくメソッドとして扱われるため、インスタンス生成時には呼ばれない。明示的に s.Sample() を呼び出した結果「hello.」が出力される。",
        },
        {
            id: 21,
            category: "インスタンスとメソッド",
            difficulty: "中級",
            question:
                "次のプログラムを確認してください。このクラスを利用する以下のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     Sample() {\n 3.         System.out.println("A");\n 4.     }\n 5.     {\n 6.         System.out.println("B");\n 7.     }\n 8. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample s = new Sample();\n 4.     }\n 5. }',
            choices: [
                "「A」「B」と表示される",
                "「B」「A」と表示される",
                "「A」と表示される",
                "「B」と表示される",
                "Sampleクラスでコンパイルエラーが発生する",
                "Mainクラスでコンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                "インスタンス初期化子はコンストラクタより先に実行されるため、B → A の順に表示される。",
        },
        {
            id: 22,
            category: "インスタンスとメソッド",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイルし、実行したときに正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     static int num;\n 3.     {\n 4.         num = 10;\n 5.     }\n 6.     public Sample() {\n 7.         num = 100;\n 8.     }\n 9. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         System.out.println(Sample.num);\n 4.     }\n 5. }",
            choices: [
                "0が表示される",
                "10が表示される",
                "100が表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 0,
            explanation:
                "インスタンスが生成されていないためコンストラクタや初期化ブロックは実行されず、staticフィールドnumの初期値0がそのまま出力される。",
        },
        {
            id: 23,
            category: "インスタンスとメソッド",
            difficulty: "中級",
            question:
                "次のプログラムを確認してください。このクラスを利用する以下のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     void Sample() {\n 3.         System.out.println("A");\n 4.     }\n 5.     Sample(String str) {\n 6.         System.out.println(str);\n 7.     }\n 8. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample s = new Sample();\n 4.     }\n 5. }',
            choices: [
                "「A」と表示される",
                "「null」と表示される",
                "何も表示されない",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 3,
            explanation:
                "引数なしのコンストラクタが定義されていないため `new Sample()` はコンパイルエラーとなる。",
        },
        {
            id: 24,
            category: "インスタンスとメソッド",
            difficulty: "中級",
            question:
                "次のプログラムを実行し、コンソールに「ok.」と表示したい。3行目の空欄に入るコードとして正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     public Sample() {\n 3.         __________\n 4.     }\n 5.     public Sample(String str, int num) {\n 6.         System.out.println("ok.");\n 7.     }\n 8. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample s = new Sample();\n 4.     }\n 5. }',
            choices: [
                "Sample(null, 0);",
                "this(null, 0);",
                "super(null, 0);",
                "this.Sample(null, 0);",
            ],
            answerIndex: 1,
            explanation:
                "同一クラス内の別コンストラクタを呼び出す場合は `this(...)` を用いる。よって `this(null, 0);` が正解。",
        },
        {
            id: 25,
            category: "インスタンスとメソッド",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     public Sample() {\n 3.         System.out.println("A");\n 4.         this("B");\n 5.     }\n 6.     public Sample(String str) {\n 7.         System.out.println(str);\n 8.     }\n 9. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample s = new Sample();\n 4.     }\n 5. }',
            choices: [
                "「A」「B」と表示される",
                "「B」「A」と表示される",
                "「A」と表示される",
                "「B」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 4,
            explanation:
                "`this(...)` コンストラクタ呼び出しは必ずコンストラクタの先頭で行わなければならないため、記述位置が不正でコンパイルエラーとなる。",
        },
        {
            id: 26,
            category: "インスタンスとメソッド",
            difficulty: "中級",
            question:
                "次のプログラムを確認してください。このクラスを利用する以下のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: " 1. package ex26;\n 2. public class Parent {\n 3.     int num = 10;\n 4. }\n\n 1. package other;\n 2. import ex26.Parent;\n 3. public class Child extends Parent {\n 4.     public static void main(String[] args) {\n 5.         System.out.println(num);\n 6.     }\n 7. }",
            choices: [
                "0が表示される",
                "10が表示される",
                "Childクラスの3行目でコンパイルエラーが発生する",
                "Childクラスの5行目でコンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 3,
            explanation:
                "static コンテキスト（mainメソッド）からインスタンスフィールド `num` を直接参照できないため、5行目でコンパイルエラーとなる。",
        },
        {
            id: 27,
            category: "インスタンスとメソッド",
            difficulty: "上級",
            question:
                "次のプログラムを確認してください。このクラスを利用する以下のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. package other;\n 2. public class Book {\n 3.     private String isbn;\n 4.     public void setIsbn(String isbn) {\n 5.         this.isbn = isbn;\n 6.     }\n 7.     protected void printInfo() {\n 8.         System.out.println(isbn);\n 9.     }\n10. }\n\n 1. package ex27;\n 2. import other.Book;\n 3. public class StoryBook extends Book {}\n\n 1. package ex27;\n 2. public class Main {\n 3.     public static void main(String[] args) {\n 4.         StoryBook story = new StoryBook();\n 5.         story.setIsbn("xxx-x-xxxxx-xx-x");\n 6.         story.printInfo();\n 7.     }\n 8. }',
            choices: [
                "「null」と表示される",
                "「xxx-x-xxxxx-xx-x」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                "protected メソッドはサブクラスから利用可能であり、isbn フィールドに設定された文字列がそのまま出力される。",
        },
        {
            id: 28,
            category: "インスタンスとメソッド",
            difficulty: "初級",
            question:
                "次のプログラムにカプセル化を適用したい。次の中から正しいコードを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     int num;\n 3.     int getNum() { return num; }\n 4.     void setNum(int num) { this.num = num; }\n 5. }",
            choices: [
                "<code>private int num;\nprivate int getNum() { return num; }\nprivate void setNum(int num) { this.num = num; }</code>",
                "<code>public int num;\npublic int getNum() { return num; }\npublic void setNum(int num) { this.num = num; }</code>",
                "<code>public int num;\nprivate int getNum() { return num; }\nprivate void setNum(int num) { this.num = num; }</code>",
                "<code>private int num;\npublic int getNum() { return num; }\npublic void setNum(int num) { this.num = num; }</code>",
            ],
            answerIndex: 3,
            explanation:
                "フィールドを private にし、getter/setter を public にするのがカプセル化の基本。",
        },
        {
            id: 29,
            category: "インスタンスとメソッド",
            difficulty: "中級",
            question:
                "次のプログラムを利用する以下のプログラムを、コンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     int num;\n 3.     public Sample(int num) {\n 4.         this.num = num;\n 5.     }\n 6. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample s = new Sample(10);\n 4.         modify(s.num);\n 5.         System.out.println(s.num);\n 6.     }\n 7.     private static void modify(int num) {\n 8.         num *= 2;\n 9.     }\n10. }",
            choices: [
                "10が表示される",
                "20が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation: "値渡しのため `s.num` は変更されず、元の値10が表示される。",
        },
        {
            id: 30,
            category: "インスタンスとメソッド",
            difficulty: "中級",
            question:
                "次のプログラムを利用する以下のプログラムを、コンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     int num;\n 3.     public Sample(int num) {\n 4.         this.num = num;\n 5.     }\n 6. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample s = new Sample(10);\n 4.         modify(s);\n 5.         System.out.println(s.num);\n 6.     }\n 7.     private static void modify(Sample s) {\n 8.         s.num *= 2;\n 9.     }\n10. }",
            choices: [
                "10が表示される",
                "20が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation: "参照渡しにより、modify メソッド内でフィールドが更新され、値は20になる。",
        },
    ],
};
