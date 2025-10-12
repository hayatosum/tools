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
                "このプログラムでは、Itemクラスのインスタンスaとbはそれぞれ独立したオブジェクトです。\n\nまず、aとbは別々に生成されているため、各インスタンスは自分専用のnumフィールド（初期値10）を持っています。\n\nb.setNum(20)を呼び出すと、bのnumだけが20に変更されます。aのnumには影響しません。\n\nそのため、a.getNum()を呼び出すと、aのnumの値（初期値10）がそのまま表示されます。\n\nインスタンスごとにフィールドの値は独立していることがポイントです。",
        },
        {
            id: 2,
            category: "インスタンスとメソッド",
            difficulty: "中級",
            question:
                "次のプログラムを確認してください。このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Item {\n 2.     public String name;\n 3.     public int price;\n 4.     public void printInfo() {\n 5.         System.out.println(name + ", " + price);\n 6.     }\n 7. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Item a = new Item();\n 4.         Item b = new Item();\n 5.         a.name = "apple";\n 6.         b.price = 100;\n 7.         a.price = 200;\n 8.         b.name = "banana";\n 9.         a = b;\n10.         a.printInfo();\n11.     }\n12. }',
            choices: [
                "「apple, 100」と表示される",
                "「banana, 100」と表示される",
                "「apple, 200」と表示される",
                "「banana, 200」と表示される",
                "実行時に例外がスローされる",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 1,
            explanation:
                'このプログラムでは、Item型のaとbは最初は別々のインスタンスです。\n\nそれぞれのインスタンスに対して、a.nameやb.priceなどの値を設定しています。\n\n途中で a = b; とすることで、aはbと同じインスタンスを参照するようになります。\n\nこの時点でaとbは同じオブジェクトを指しているため、a.printInfo()を呼び出すと、bのname（"banana"）とbのprice（100）が出力されます。\n\n参照の切り替えによって、aが元々参照していたインスタンスの値は使われなくなり、bの値が表示される点がポイントです。',
        },
        {
            id: 3,
            category: "インスタンスとメソッド",
            difficulty: "初級",
            question:
                "次のプログラムを実行し、「NULL」と表示したい。3行目の空欄に入るコードとして、正しいものをすべて選びなさい。",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         __________\n 4.         System.out.println(obj);\n 5.     }\n 6. }",
            choices: [
                "<code>Object obj = null;</code>",
                "<code>Object obj = false;</code>",
                "<code>Object obj = NULL;</code>",
                '<code>Object obj = "";</code>',
                "他の選択肢はすべて誤りである",
            ],
            answerIndex: 4,
            explanation:
                'Javaでは、参照型の変数に何も参照させない場合はnullリテラルを使います。\n\nObject obj = null; とすると、objはどのオブジェクトも参照していない状態になります。\n\nこの状態でSystem.out.println(obj);を実行すると、コンソールには小文字の"null"と表示されます。\n\nfalseやNULL、大文字のNULL、空文字（""）は、Object型の変数に代入できないか、意味が異なります。\n\nJavaで参照がないことを表すのは必ず小文字のnullだけです。\n\nそのため、問題文の「NULL」と表示することはできません。',
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
                "このプログラムでは、Object型のaとbに新しいインスタンスをそれぞれ代入しています。\n\n5行目でc = a; としているため、cはaと同じインスタンスを参照します。\n\n6行目でa = null; としても、cがまだ3行目のインスタンスを参照しているため、この時点では3行目のインスタンスはガーベジコレクションの対象になりません。\n\n7行目でb = null; とすると、4行目のインスタンスを参照している変数がなくなります。\n\nこの時点で、4行目のインスタンスだけが参照されていない状態となり、ガーベジコレクションの対象となります。\n\n参照が1つでも残っていればGCの対象にならない点がポイントです。",
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
                "static変数はクラス全体で1つだけ存在し、すべてのインスタンスで共有されます。\n\nこのプログラムでは、Sample.numに対して複数の操作が行われています。\n\nまず、Sample.num = 10; でnumは10になります。\n次に、s.num += 10; でnumは20になります。\nさらに、s2.num = 30; でnumは30に上書きされます。\n\n最後にSystem.out.println(Sample.num);を実行すると、numの値は30なので「30」と表示されます。\n\nstatic変数はどのインスタンスからでも同じ値を参照・変更できる点がポイントです。",
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
                "staticメソッドやstaticフィールドは、インスタンスを生成しなくてもクラスから直接利用できます。\n\nstaticメソッドからは、同じくstaticで宣言されたメソッドやフィールドにアクセスできますが、インスタンスごとに存在するフィールドやメソッドにはアクセスできません。\n\n一方、staticではない（インスタンス）メソッドからは、staticフィールドやstaticメソッドにもアクセスできます。\n\nstaticはインスタンスに依存しないため、クラス全体で共有される点がポイントです。",
        },
        {
            id: 7,
            category: "インスタンスとメソッド",
            difficulty: "初級",
            question:
                "次のクラスのhelloメソッドを呼び出し、コンソールに「hello」と表示したい。4行目の空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     public void hello() {\n 3.         System.out.println("hello");\n 4.     }\n 5. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample sample = new Sample();\n 4.         __________\n 5.     }\n 6. }',
            choices: [
                "<code>hello();</code>",
                "<code>hello();</code>",
                "<code>Sample.hello;</code>",
                "<code>Sample.hello();</code>",
                "<code>sample.hello();</code>",
                "<code>sample.hello;</code>",
            ],
            answerIndex: 4,
            explanation:
                "インスタンスメソッドは、クラスのインスタンス（オブジェクト）を生成し、その参照を使って呼び出す必要があります。\n\nこのプログラムでは、Sampleクラスのインスタンスsampleを生成しています。\n\nhelloメソッドを呼び出すには、sample.hello(); のように、インスタンス名に続けてメソッドを記述します。\n\nこれにより、コンソールに「hello」と表示されます。\n\nクラス名だけやメソッド名だけでは呼び出せない点がポイントです。",
        },
        {
            id: 8,
            category: "インスタンスとメソッド",
            difficulty: "中級",
            question:
                "次のプログラムを確認してください。このクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     public int add(Integer a, Integer b) {\n 3.         return a + b;\n 4.     }\n 5. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample s = new Sample();\n 4.         System.out.println(s.add(10));\n 5.     }\n 6. }",
            choices: [
                "「10」と表示される",
                "「10null」と表示される",
                "「void」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 3,
            explanation:
                "このプログラムでは、Sampleクラスのaddメソッドは「2つのInteger型引数」を受け取るように定義されています。\n\nMainクラスのmainメソッドでは、addメソッドを呼び出す際に「引数を1つだけ」渡しています。\n\nJavaでは、メソッドを呼び出すときは、定義された引数の数と型が完全に一致している必要があります。\n\nこの場合、addメソッドは2つの引数が必要ですが、1つしか渡していないため、コンパイル時にエラーとなります。\n\nつまり、プログラムはコンパイルエラーとなり、実行することはできません。\n\nポイントは、メソッド呼び出し時の引数の数・型が合っていないとコンパイルエラーになることです。",
        },
        {
            id: 9,
            category: "インスタンスとメソッド",
            difficulty: "初級",
            question:
                "次のプログラムの5行目に記述できるコードとして、正しいものを選びなさい。（2つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int a = 1;\n 4.         int b = 2;\n 5.         __________\n 6.         int c = b;\n 7.     }\n 8. }",
            choices: [
                "<code>System.out.println(a);</code>",
                "<code>System.out.println(b + 2);</code>",
                "<code>System.out.println(c);</code>",
                "<code>System.out.println(d);</code>",
            ],
            answerIndex: [0, 1],
            explanation:
                "このプログラムでは、5行目に記述できるコードを考えます。\n\n3行目でa、4行目でbというint型の変数が宣言されています。\n\nそのため、aやbを使ったSystem.out.println(a); や System.out.println(b + 2); は正しく記述できます。\n\n一方、cは6行目で初めて宣言されるため、5行目の時点ではまだ使えません。\nまた、dという変数はどこにも宣言されていないため、System.out.println(d); はエラーになります。\n\nポイントは、変数は宣言された行より前では使えないこと、未宣言の変数は使えないことです。",
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
                "Javaでメソッドを宣言する際は、戻り値の型・メソッド名・引数リスト・本体（波かっこ）を正しく記述する必要があります。\n\n戻り値が何もない場合は、小文字のvoidを使います。大文字のVoidはクラス型なので、メソッドの戻り値型としては使いません。\n\nまた、戻り値型とreturn文の型が一致していない場合や、戻り値型やメソッド名が省略されている場合も正しい宣言にはなりません。\n\nこの問題では、正しいメソッド宣言は「void sample() { }」です。\n\nポイントは、戻り値型voidは必ず小文字で記述し、メソッド名や引数リストも正しく書くことです。",
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
                'このプログラムでは、SampleクラスのsetValueメソッドは戻り値型がvoidです。\n\nvoid型のメソッドは値を返さないため、呼び出し結果を変数に代入することはできません。\n\nMainクラスの4行目では、setValue("hello")の戻り値をString型の変数valに代入しようとしていますが、setValueは何も返さないため、ここでコンパイルエラーとなります。\n\nこのように、戻り値がvoidのメソッドを変数に代入しようとするとエラーになる点がポイントです。',
        },
        {
            id: 12,
            category: "インスタンスとメソッド",
            difficulty: "中級",
            question:
                "次のプログラムを確認してください。このクラスを利用する以下のプログラムの空欄に入るコードとして、正しいものを選びなさい。（2つ選択）",
            code: " 1. public class Sample {\n 2.     float divide(int a, int b) {\n 3.         return (float) a / (float) b;\n 4.     }\n 5. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample s = new Sample();\n 4.         _____ result = s.divide(10, 2);\n 5.         System.out.println(result);\n 6.     }\n 7. }",
            choices: [
                "<code>int</code>",
                "<code>float</code>",
                "<code>double</code>",
                "<code>Integer</code>",
                "<code>String</code>",
                "<code>dim</code>",
            ],
            answerIndex: [1, 2],
            explanation:
                "このプログラムでは、Sampleクラスのdivideメソッドはfloat型の値を返します。\n\nそのため、戻り値を受け取る変数resultの型としてfloatを指定することができます。\n\nまた、Javaではfloat型の値をdouble型の変数に代入することも可能です（自動的に型変換されるため）。\n\n一方、intやInteger、Stringなど、float型の値を直接代入できない型を指定するとコンパイルエラーになります。\n\nポイントは、メソッドの戻り値型と変数の型が代入可能な関係である必要があることです。",
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
                "このプログラムでは、Sampleクラスのmethodメソッドはint型の引数を2つ受け取るように定義されています。\n\nしかし、Mainクラスの4行目では、methodメソッドを引数1つだけで呼び出そうとしています。\n\nJavaでは、メソッドを呼び出すときは、定義された引数の数と型が完全に一致している必要があります。\n\nこの場合、必要な引数が足りないため、コンパイル時にエラーとなります。\n\nポイントは、メソッド呼び出し時に引数の数や型が合っていないとコンパイルエラーになることです。",
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
            answerIndex: 4,
            explanation:
                "Javaで可変長引数（int... valuesなど）を使う場合、必ず引数リストの最後に1つだけ記述する必要があります。\n\n可変長引数を途中や複数指定することはできません。また、void method(void)のようにvoidを引数に書くこともできません。\n\nこの問題の選択肢はすべて誤りです。\n\nポイントは、可変長引数は引数リストの最後に1つだけ、というルールです。",
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
                'この問題のコードでは、return文の後に処理が書かれています。\n\nJavaでは、return文が実行されると、そのメソッドの処理は即座に終了し、以降のコードには到達できません。\n\nこのため、returnの後に記述されたSystem.out.println("B");は「到達不能文」となり、コンパイルエラーとなります。\n\nポイントは、returnの後に何か処理を書くと、その部分は絶対に実行されないため、コンパイル時にエラーになるというJavaの仕様です。',
        },
        {
            id: 16,
            category: "インスタンスとメソッド",
            difficulty: "上級",
            question: "次のメソッドをオーバーロードしていないメソッド定義を選びなさい。（2つ選択）",
            code: " 1. int calc(double a, int b) {\n 2.     return (int) a + b;\n 3. }",
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
                "この問題は「メソッドのオーバーロード」について問うものです。\n\nJavaでは、メソッド名が同じでも「引数リスト（型や個数、順序）」が異なればオーバーロードとなります。\n\nただし、戻り値の型だけが異なる場合や、引数リストが全く同じ場合はオーバーロードにはなりません。\n\n・戻り値の型だけが異なるメソッド（例：int型→double型）は、同じシグネチャとみなされ、コンパイルエラーになります。\n・引数の型や個数、順序が全く同じメソッドも、同じシグネチャとなり、これもコンパイルエラーです。\n\nこの問題では、\n- 戻り値の型だけが異なるもの\n- 引数リストが全く同じもの\nが「オーバーロードしていない」メソッド定義となります。\n\nポイントは、オーバーロードの判定は「引数リストの型・個数・順序」だけで行われ、戻り値の型は区別に使われないことです。",
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
            answerIndex: 0,
            explanation:
                "このプログラムは、メソッドのオーバーロードと自動型変換のあいまいさについて問う問題です。\n\nMainクラスには、引数の型が異なる2つのcalcメソッドが定義されています。\n\nmainメソッドでm.calc(2, 3)を呼び出すと、int型の2つの引数が渡されます。\n\nJavaでは、引数の型が完全に一致するメソッドがない場合、自動型変換（int→double）を利用して最も適切なメソッドが選ばれます。\n\nしかし、この場合はcalc(double, int)にもcalc(int, double)にも変換できてしまい、どちらを呼ぶべきかJVMが判断できません。\n\nこのような場合、「あいまいなメソッド呼び出し」となり、4行目でコンパイルエラーが発生します。\n\nポイントは、複数のオーバーロードが自動型変換で同じ優先度になった場合、Javaはどちらを選ぶか決められず、コンパイルエラーになるという仕様です。",
        },
        {
            id: 18,
            category: "インスタンスとメソッド",
            difficulty: "初級",
            question:
                "次のメソッドをオーバーロードするメソッド定義として、正しいものをすべて選びなさい。",
            code: " 1. void method() {\n 2.     // do something\n 3. }",
            choices: [
                "public void method() {}",
                "protected void method() {}",
                "private void method() {}",
                "他の選択肢はすべて誤りである",
            ],
            answerIndex: 3,
            explanation:
                "この問題は「メソッドのオーバーロード」の正しい定義について問うものです。\n\nJavaでメソッドをオーバーロードするには、同じメソッド名で「引数リスト（型・個数・順序）」が異なる必要があります。\n\nアクセス修飾子（public, protected, private）が異なるだけでは、オーバーロードとはみなされません。\n\nこのため、引数リストが同じで修飾子だけが違うメソッドは、オーバーロードではなく「同じシグネチャ」となり、コンパイルエラーになります。\n\nオーバーロードとして正しいのは、引数の型や個数、順序が異なるメソッド定義です。\n\nポイントは、オーバーロードの判定基準は「引数リスト」だけであり、アクセス修飾子や戻り値の型は関係ないということです。",
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
                "この問題は、Javaのコンストラクタに付けられるアクセス修飾子について問うものです。\n\nJavaでは、コンストラクタにもクラスやメソッドと同じようにアクセス修飾子（public, protected, private, 省略（パッケージプライベート））を自由に付けることができます。\n\nどのアクセス修飾子も利用可能で、特に制限はありません。\n\nそのため、publicだけでなく、protectedやprivate、修飾子なし（パッケージプライベート）でもコンストラクタを定義できます。\n\nポイントは、コンストラクタのアクセス修飾子に制限はなく、クラスやメソッドと同じように使えるということです。",
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
                'この問題は、コンストラクタとメソッドの違いについて問うものです。\n\nSampleクラスには、クラス名と同じ名前のvoid型メソッド（void Sample()）が定義されていますが、これはコンストラクタではなく通常のメソッドです。\n\nそのため、new Sample()でインスタンスを生成しても、このメソッドは自動的には呼び出されません。\n\nMainクラスでs.Sample()と明示的に呼び出すことで、初めてSystem.out.println("hello.");が実行され、「hello.」と表示されます。\n\nポイントは、コンストラクタには戻り値型を付けないこと、戻り値型がある場合は通常のメソッドとして扱われることです。',
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
                'このプログラムでは、Sampleクラスにインスタンス初期化子（波かっこで囲まれたブロック）とコンストラクタの両方が定義されています。\n\nインスタンス初期化子は、インスタンス生成時にコンストラクタよりも先に必ず実行されます。\n\nそのため、Sampleクラスのインスタンスを生成すると、まずインスタンス初期化子の中のSystem.out.println("B");が実行され、次にコンストラクタのSystem.out.println("A");が実行されます。\n\n結果として、コンソールには「B」「A」の順で表示されます。\n\nポイントは、インスタンス初期化子はコンストラクタよりも先に実行されるというJavaの仕様です。',
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
                "このプログラムでは、Sampleクラスにstaticフィールドnum、インスタンス初期化子、コンストラクタが定義されています。\n\nstaticフィールドは、クラスがロードされた時点で初期化され、明示的な初期値がなければ0になります。\n\nインスタンス初期化子やコンストラクタは、Sampleクラスのインスタンスを生成したときに初めて実行されます。\n\nMainクラスのmainメソッドでは、Sampleクラスのインスタンスを生成せずに、Sample.numの値を出力しています。\n\nそのため、インスタンス初期化子やコンストラクタは一度も実行されず、numの値は初期値の0のままです。\n\n結果として、コンソールには0が表示されます。\n\nポイントは、staticフィールドはインスタンス生成がなくても使えるが、初期化子やコンストラクタはインスタンス生成時にしか実行されないことです。",
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
                "このプログラムでは、Sampleクラスに引数なしのコンストラクタが定義されていません。\n\nvoid型のSample()は、戻り値型があるためコンストラクタではなく通常のメソッドとして扱われます。\n\nまた、引数付きのSample(String str)は定義されていますが、引数なしのコンストラクタは自動生成されません。\n\nそのため、Mainクラスでnew Sample()と書くと、対応するコンストラクタが存在しないためコンパイルエラーとなります。\n\nポイントは、\n・戻り値型があるとコンストラクタではなくメソッドになること\n・引数付きコンストラクタを定義すると、引数なしコンストラクタは自動生成されないこと\nです。",
        },
        {
            id: 24,
            category: "インスタンスとメソッド",
            difficulty: "中級",
            question:
                "次のプログラムを実行し、コンソールに「ok.」と表示したい。3行目の空欄に入るコードとして正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     public Sample() {\n 3.         __________\n 4.     }\n 5.     public Sample(String str, int num) {\n 6.         System.out.println("ok.");\n 7.     }\n 8. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample s = new Sample();\n 4.     }\n 5. }',
            choices: [
                "<code>Sample(null, 0);</code>",
                "<code>this(null, 0);</code>",
                "<code>super(null, 0);</code>",
                "<code>this.Sample(null, 0);</code>",
            ],
            answerIndex: 1,
            explanation:
                'このプログラムでは、Sampleクラスに引数なしコンストラクタと、引数2つのコンストラクタが定義されています。\n\n引数なしコンストラクタの中で、同じクラス内の別のコンストラクタを呼び出したい場合は、this(...)を使います。\n\nthis(null, 0); と記述することで、引数2つのコンストラクタが呼び出され、その中のSystem.out.println("ok.");が実行されます。\n\nこのthis(...)によるコンストラクタ呼び出しは、必ずコンストラクタの先頭で行う必要があります。\n\n結果として、Sampleクラスのインスタンスを生成すると、コンソールに「ok.」と表示されます。\n\nポイントは、\n・同一クラス内の別コンストラクタを呼び出すにはthis(...)を使うこと\n・this(...)はコンストラクタの先頭でしか使えないこと\nです。',
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
                'このプログラムでは、引数なしのコンストラクタの中でthis("B");によって別のコンストラクタを呼び出そうとしています。\n\nただし、this(...)によるコンストラクタ呼び出しは、必ずコンストラクタの最初の文として記述しなければなりません。\n\nこのコードでは、System.out.println("A");の後にthis("B");が書かれているため、Javaのルールに違反しています。\n\nこのような場合、コンパイル時にエラーとなり、プログラムは実行できません。\n\nポイントは、this(...)による別コンストラクタの呼び出しは、必ずコンストラクタの先頭でなければならないというJavaの仕様です。',
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
                "このプログラムでは、Parentクラスのnumフィールドはインスタンスフィールド（staticではない）として定義されています。\n\nChildクラスのmainメソッドはstaticメソッドであり、staticメソッドの中からはインスタンスを生成せずにインスタンスフィールドを直接参照することはできません。\n\nmainメソッド内でSystem.out.println(num);と書くと、どのインスタンスのnumなのか特定できないため、コンパイルエラーとなります。\n\nインスタンスフィールドを使いたい場合は、まずParentやChildのインスタンスを生成し、その参照を使ってnumにアクセスする必要があります。\n\nポイントは、staticメソッドからはインスタンスフィールドを直接参照できないというJavaの仕様です。",
        },
        {
            id: 27,
            category: "インスタンスとメソッド",
            difficulty: "上級",
            question:
                "次のプログラムを確認してください。このクラスを利用する以下のプログラムをコンパイル、実行したときの結果として正しいものを選びなさい。（1つ選択）",
            code: ' 1. package other;\n 2. public class Book {\n 3.     private String isbn;\n 4.     public void setIsbn(String isbn) {\n 5.         this.isbn = isbn;\n 6.     }\n 7.     protected void printInfo() {\n 8.         System.out.println(isbn);\n 9.     }\n10. }\n\n 1. package ex27;\n 2. import other.Book;\n 3. public class StoryBook extends Book {}\n\n 1. package ex27;\n 2. public class Main {\n 3.     public static void main(String[] args) {\n 4.         StoryBook story = new StoryBook();\n 5.         story.setIsbn("xxx-x-xxxxxx-xx-x");\n 6.         story.printInfo();\n 7.     }\n 8. }',
            choices: [
                "「null」と表示される",
                "「xxx-x-xxxxxx-xx-x」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "このプログラムは、Javaのアクセス修飾子（protected）の動作を問う問題です。\n\nBookクラスのprintInfoメソッドはprotectedで宣言されています。\nprotectedメソッドは、同じパッケージ内、またはサブクラスからアクセスできますが、\n異なるパッケージにあるサブクラス以外のクラス（この場合Mainクラス）からは直接呼び出すことはできません。\n\nMainクラスはBookのサブクラスではなく、またパッケージも異なるため、\nstory.printInfo()の呼び出しはコンパイルエラーとなります。\n\nポイントは、protectedメソッドは「サブクラス」または「同一パッケージ」からのみアクセス可能であり、\n異なるパッケージの非サブクラスからはアクセスできないというJavaの仕様です。",
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
                "カプセル化とは、クラスの内部データ（フィールド）を外部から直接アクセスできないようにし、必要に応じてメソッド（getter/setter）を通じて操作する仕組みです。\n\nこのプログラムでは、numフィールドをprivateにし、値の取得はpublicなgetNumメソッド、値の設定はpublicなsetNumメソッドで行うのがカプセル化の基本です。\n\nこれにより、外部から直接numにアクセスできなくなり、不正な値の代入や予期しない変更を防ぐことができます。\n\nまた、すべてのメソッドを公開（public）にする必要はなく、必要なものだけを公開すればよいという点も重要です。\n\npublicメソッドと非公開メソッド（privateやpackage-privateなど）が混在していても問題ありません。\n\nポイントは「フィールドはprivate、getter/setterはpublic」にすること、そして必要なメソッドだけを公開すればよいという設計方針です。",
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
            explanation:
                "設問のプログラムでは、Sampleクラスのインスタンスsを生成し、そのnumフィールドに10をセットしています。\n\n次に、modifyメソッドにs.num（int型の値）を渡しています。\n\nJavaでは、基本データ型（intなど）をメソッドに渡す場合、「値渡し」となります。\n\nこのため、modifyメソッド内でnum *= 2; としても、呼び出し元のs.numには影響しません。\n\nmainメソッドのs.numの値は10のままです。\n\n最後にSystem.out.println(s.num);を実行すると、10が表示されます。\n\nポイントは、基本型の引数は値渡しなので、メソッド内で変更しても元の変数には影響しないことです。",
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
            explanation:
                "設問のプログラムでは、Sampleクラスのインスタンスsを生成し、そのnumフィールドに10をセットしています。\n\n次に、modifyメソッドにs（Sample型のオブジェクト）を渡しています。\n\nJavaでは、オブジェクト型の引数をメソッドに渡す場合、その参照（アドレス）が渡されます。\n\nmodifyメソッド内でs.num *= 2; とすると、sが参照しているインスタンスのnumフィールドが直接変更されます。\n\nそのため、mainメソッドでSystem.out.println(s.num);を実行すると、numの値は2倍されて20が表示されます。\n\nポイントは、オブジェクトのフィールドはメソッド内で変更すると呼び出し元にも反映されることです。",
        },
    ],
};
