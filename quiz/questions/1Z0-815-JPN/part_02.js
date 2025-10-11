const Q_1Z0_815_JPN_02 = {
    prefix: "1Z0-815-JPN",
    part: "02",
    questions: [
        {
            id: 1,
            category: "Javaの基本データ型と文字列操作",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int val = 7;\n 4.         bool flg = true;\n 5.         if (flg == true) {\n 6.             do {\n 7.                 System.out.println(val);\n 8.             } while (val > 10);\n 9.         }\n10.     }\n11. }",
            choices: [
                "7が1回だけ表示される",
                "何も表示されない",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "このプログラムは、4行目で「bool flg = true;」と宣言していますが、Javaには「bool」型は存在せず、「boolean」を使う必要があります。\n\nそのため、コンパイル時に「型が存在しない」というエラーが発生します。\n\nまた、他の部分に文法的な誤りはありませんが、型名の間違いだけでコンパイルが通りません。\n\nよって、正しい答えは「コンパイルエラーが発生する」です。",
        },
        {
            id: 2,
            category: "Javaの基本データ型と文字列操作",
            difficulty: "初級",
            question: "次の式のうち、コンパイルエラーになるものを選びなさい。（1つ選択）",
            choices: [
                "<code>int a = 267;</code>",
                "<code>int b = 0413;</code>",
                "<code>int c = 0x10B;</code>",
                "<code>int d = 0b100001011;</code>",
                "<code>int e = 0827;</code>",
            ],
            answerIndex: 4,
            explanation:
                "0から始まる数値リテラルは、Javaでは8進数として扱われます。\n\n8進数では0〜7の数字しか使えません。8や9を含むとコンパイルエラーになります。\n\n「0827」は8進数リテラルとして解釈されますが、8という数字が含まれているため不正です。\n\n他の式は10進数・8進数・16進数・2進数として正しく記述されています。\n\nしたがって、8や9を含む8進数リテラルはエラーとなります。",
        },
        {
            id: 3,
            category: "Javaの基本データ型と文字列操作",
            difficulty: "中級",
            question: "次の式のうち、コンパイルエラーになるものを選びなさい。（5つ選択）",
            choices: [
                "<code>int a = 123_456_789;</code>",
                "<code>int b = 5_______2;</code>",
                "<code>int c = _123_456_789;</code>",
                "<code>int d = 123_456_789_;</code>",
                "<code>float e = 3._1415F;</code>",
                "<code>long f = 999_99_9999_L;</code>",
                "<code>byte g = 0b0_1;</code>",
                "<code>int h = 0_52;</code>",
                "<code>int i = 0x_52;</code>",
            ],
            answerIndex: [2, 3, 4, 5, 8],
            explanation:
                "Javaでは、数値リテラルの中にアンダースコア（_）を使うことができますが、いくつかのルールがあります。\n\n・数値の先頭や末尾にはアンダースコアを置けません。\n・小数点の直前や直後、型を表す記号（LやFなど）の直前にも置けません。\n・16進数や2進数などの接頭辞（0x, 0bなど）の直後にも置けません。\n\nこのため、アンダースコアが数値の先頭や末尾、接頭辞や小数点の隣、型記号の直前にある場合はコンパイルエラーとなります。\n\n正しい使い方であれば、桁区切りとして複数連続で使うことも可能です。",
        },
        {
            id: 4,
            category: "Javaの基本データ型と文字列操作",
            difficulty: "初級",
            question: "char型の変数の初期化として、正しいものを選びなさい。（1つ選択）",
            choices: [
                '<code>char a = "a";</code>',
                "<code>char b = 'abc';</code>",
                "<code>char c = 89;</code>",
                "<code>char d = null;</code>",
            ],
            answerIndex: 2,
            explanation:
                "char型の変数は、1文字の文字リテラル（シングルクォートで囲む）や、整数リテラルで初期化できます。\n\n整数リテラルを代入した場合、その値はUnicodeのコードポイントとして扱われ、対応する文字が格納されます。\n\nダブルクォートで囲んだ文字列や、複数文字の文字リテラル、nullの代入はできません。\n\nしたがって、整数リテラルで初期化する方法が正しいです。",
        },
        {
            id: 5,
            category: "Javaの基本データ型と文字列操作",
            difficulty: "初級",
            question: "次の式のうち、コンパイルエラーになるものを選びなさい。（2つ選択）",
            choices: [
                "<code>int $a = 100;</code>",
                "<code>int b_ = 200;</code>",
                "<code>int _0 = 300;</code>",
                "<code>int ${d} = 400;</code>",
                "<code>int g.a = 700;</code>",
            ],
            answerIndex: [3, 4],
            explanation:
                "Javaの変数名には、英字、数字、アンダースコア（_）、ドル記号（$）が使えます。\n\nただし、変数名の先頭に数字は使えません。また、波括弧（{ }）やドット（.）は変数名として使うことはできません。\n\nそのため、波括弧やドットを含むものはコンパイルエラーとなります。\n\nアンダースコアやドル記号は変数名の先頭や途中に使うことができます。",
        },
        {
            id: 6,
            category: "Javaの基本データ型と文字列操作",
            difficulty: "初級",
            question: "次の変数宣言のうち、コンパイルエラーとならないものを選びなさい。（1つ選択）",
            choices: [
                "<code>var a;</code>",
                "<code>var b = null;</code>",
                "<code>var c = () -> {};</code>",
                "<code>var d = {1, 2, 3};</code>",
                "<code>var e = new ArrayList<>();</code>",
            ],
            answerIndex: 4,
            explanation:
                "Javaのvarは、右辺から型を推論できる場合にのみ使えます。\n\n右辺が省略されていたり、nullだけを代入したり、配列リテラルやラムダ式だけでは型が特定できないため、これらはコンパイルエラーになります。\n\n一方、ArrayListのインスタンス化のように、右辺から型が明確に分かる場合はvarで宣言できます。\n\nvarは必ず初期化と同時に使い、型が推論できる必要があります。",
        },
        {
            id: 7,
            category: "Javaの基本データ型と文字列操作",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     private var value;\n 3.     public Sample(var value) {\n 4.         this.value = value;\n 5.     }\n 6.     public void test() {\n 7.         System.out.println(value);\n 8.     }\n 9. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         Sample s = new Sample("sample");\n 4.         s.test();\n 5.     }\n 6. }',
            choices: [
                "「sample」と表示される",
                "「null」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "Javaのvarは、ローカル変数の型推論にのみ使えます。\n\nフィールドやメソッドの引数・戻り値の型としては使えません。\n\nこのプログラムでは、フィールドやコンストラクタの引数にvarを使っているため、コンパイルエラーとなります。\n\nvarは必ずローカル変数の宣言時にのみ使い、他の場所では使えない点に注意が必要です。",
        },
        {
            id: 8,
            category: "Javaの基本データ型と文字列操作",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class A {\n 2.     public void test() { System.out.println("A"); }\n 3. }\n\n 1. public class B extends A {\n 2.     @Override public void test() { System.out.println("B"); }\n 3. }\n\n 1. public class C extends A {\n 2.     @Override public void test() { System.out.println("C"); }\n 3. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         var a = new B();\n 4.         a = new C();\n 5.         a.test();\n 6.     }\n 7. }',
            choices: [
                "コンパイルエラーが発生する",
                "実行時例外がスローされる",
                "Aが表示される",
                "Bが表示される",
                "Cが表示される",
            ],
            answerIndex: 0,
            explanation:
                "varで宣言した変数は、右辺の型から自動的に型が決まります。\n\nこのプログラムでは、varで宣言した変数aに最初はB型のインスタンスを代入し、その後C型のインスタンスを代入しています。\n\nvarによる型推論は、最初の代入で型が決まるため、この場合aの型はB型となります。\n\nB型の変数にC型のインスタンスを代入しようとすると、型が一致しないためコンパイルエラーとなります。\n\nvarは宣言時の右辺の型で型が固定される点に注意が必要です。",
        },
        {
            id: 9,
            category: "Javaの基本データ型と文字列操作",
            difficulty: "初級",
            question:
                "Stringオブジェクトを作成するコードとして、正しいものを選びなさい。（2つ選択）",
            choices: [
                '<code>String a = new String("sample");</code>',
                '<code>String b = "sample";</code>',
                '<code>String c = String.newInstance("sample");</code>',
                '<code>String d = String.valueOf("sample");</code>',
            ],
            answerIndex: [0, 1],
            explanation:
                'JavaでStringオブジェクトを作成する方法は主に2つあります。\n\n・new演算子を使う\n  new String("sample") のように書くと、毎回新しいStringインスタンスが生成されます。\n\n・文字列リテラルを使う\n  "sample" のようにダブルクォートで囲むと、文字列リテラルとしてStringオブジェクトが作成されます。\n\n他の選択肢についても確認します。\n\nString.newInstance("sample") というメソッドは存在しません。\nまた、String.valueOf("sample") は、引数がString型の場合はそのまま同じ文字列を返しますが、通常は新しいインスタンスを作成する用途では使いません。\n\nこのため、正しいのは new演算子による生成と、リテラルによる生成の2つです。',
        },
        {
            id: 10,
            category: "Javaの基本データ型と文字列操作",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String str = "hoge, world.";\n 4.         hello(str);\n 5.         System.out.println(str);\n 6.     }\n 7.     private static void hello(String msg) {\n 8.         msg.replaceAll("hoge", "hello");\n 9.     }\n10. }',
            choices: [
                "「hoge, world.」と表示される",
                "「hello, world.」と表示される",
                "「hello」と表示される",
                "「hello, hello.」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                'JavaのStringはイミュータブル（不変）なオブジェクトです。\n\nreplaceAllメソッドを呼び出しても、元の文字列は変更されず、\n置換結果は新しいStringオブジェクトとして返されます。\n\nこのプログラムでは、helloメソッド内でmsg.replaceAll("hoge", "hello")を呼び出していますが、\nその戻り値をどこにも代入していません。\n\nそのため、mainメソッドのstrには元の"hoge, world."がそのまま残り、\nSystem.out.println(str); で\n"hoge, world."が表示されます。\n\nStringの内容を変更したい場合は、replaceAllの戻り値を変数に代入する必要があります。',
        },
        {
            id: 11,
            category: "Javaの基本データ型と文字列操作",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String str = "abcde";\n 4.         System.out.println(str.charAt(5));\n 5.     }\n 6. }',
            choices: [
                "dが表示される",
                "eが表示される",
                "何も表示されない",
                "nullが表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 5,
            explanation:
                'String#charAtメソッドは、指定したインデックス位置の文字を返します。\n\nこのとき、インデックスは0から始まり、\n文字列の長さ-1までが有効な範囲です。\n\nこのプログラムでは、\nstr.charAt(5) を呼び出していますが、\nstrの値は"abcde"で、長さは5です。\n\n有効なインデックスは0〜4までなので、5は範囲外となります。\n\nそのため、実行時にStringIndexOutOfBoundsExceptionがスローされます。\n\nコンパイルは通りますが、実行時例外に注意が必要です。',
        },
        {
            id: 12,
            category: "Javaの基本データ型と文字列操作",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String str = "abcde";\n 4.         System.out.println(str.indexOf("abcdef"));\n 5.     }\n 6. }',
            choices: [
                "0が表示される",
                "1が表示される",
                "4が表示される",
                "5が表示される",
                "-1が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 4,
            explanation:
                'String#indexOfメソッドは、指定した文字列や文字が最初に現れる位置のインデックスを返します。\n\n検索対象が見つからない場合は、-1を返す仕様です。\n\nこのプログラムでは、\nstrの値は"abcde"ですが、検索している"abcdef"という文字列は含まれていません。\n\nそのため、indexOfの戻り値は-1となり、\n-1が表示されます。\n\n見つからない場合は必ず-1になる点に注意しましょう。',
        },
        {
            id: 13,
            category: "Javaの基本データ型と文字列操作",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String str = "abcde";\n 4.         System.out.println(str.substring(2, 4));\n 5.     }\n 6. }',
            choices: [
                "「bcd」と表示される",
                "「cde」と表示される",
                "「bc」と表示される",
                "「cd」と表示される",
            ],
            answerIndex: 3,
            explanation:
                "substringメソッドは、開始インデックスから終了インデックスの直前までの部分文字列を返します。\n\nこのプログラムでは、\nstr.substring(2, 4) を呼び出しています。\n\nstrの値は\"abcde\"なので、\nインデックス2は'c'、インデックス3は'd'です。\n\nインデックス4は含まれないため、\n取得される部分文字列は'c'と'd'の2文字、つまり\"cd\"となります。\n\nsubstringの終了インデックスは含まれない点に注意しましょう。",
        },
        {
            id: 14,
            category: "Javaの基本データ型と文字列操作",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String str = "aaaa";\n 4.         System.out.println(str.replace("aa", "b"));\n 5.     }\n 6. }',
            choices: [
                "「baa」と表示される",
                "「aab」と表示される",
                "「bb」と表示される",
                "「aba」と表示される",
            ],
            answerIndex: 2,
            explanation:
                'このプログラムでは、文字列 "aaaa" に対して str.replace("aa", "b") を実行しています。\n\nreplaceメソッドは、左から順に一致した部分をすべて置換します。\n\nまず、先頭の "aa" を "b" に置換し、残りの "aa" も再度 "b" に置換されます。\n\nその結果、"aaaa" → "bb" となります。\n\n重なり合う部分は再度検索されないため、2回の置換で終了します。\n\nしたがって、出力は "bb" です。',
        },
        {
            id: 15,
            category: "Javaの基本データ型と文字列操作",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String str = "abcde";\n 4.         System.out.println(str.charAt(str.length()));\n 5.     }\n 6. }',
            choices: [
                "aが表示される",
                "eが表示される",
                "5が表示される",
                "-1が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 5,
            explanation:
                'このプログラムでは、文字列 "abcde" の長さを取得し、その値をインデックスとして charAt メソッドに渡しています。\n\nString#charAt は、指定したインデックス位置の文字を返しますが、インデックスは 0 から始まります。\n\n"abcde" の長さは 5 ですが、有効なインデックスは 0 から 4 までです。\n\ncharAt(5) を呼び出すと、範囲外アクセスとなり、実行時に StringIndexOutOfBoundsException という例外がスローされます。\n\nこの例外はコンパイル時には検出されず、実行時に発生します。\n\nしたがって、出力はなく、実行時例外が発生します。',
        },
        {
            id: 16,
            category: "Javaの基本データ型と文字列操作",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String str = "abcde";\n 4.         System.out.println(str.substring(1, 3).startsWith("b"));\n 5.     }\n 6. }',
            choices: [
                "「true」と表示される",
                "「false」と表示される",
                "「bc」と表示される",
                "「abc」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                'このプログラムでは、文字列 "abcde" から substring(1, 3) を呼び出しています。\n\nsubstring(開始, 終了) は、開始インデックスから終了インデックスの直前までの部分文字列を返します。\n\nインデックス1は "b"、インデックス2は "c" なので、substring(1, 3) の結果は "bc" です。\n\n次に、startsWith("b") を呼び出すと、部分文字列 "bc" が "b" で始まるかどうかを判定します。\n\n"bc" は "b" で始まるため、結果は true となります。\n\nしたがって、出力は true です。',
        },
        {
            id: 17,
            category: "Javaの基本データ型と文字列操作",
            difficulty: "初級",
            question:
                "次のプログラムを実行し、「Hello, Java!」と表示したい。3行目の空欄に入るコードとして、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         String str = __________;\n 4.         System.out.println(str);\n 5.     }\n 6. }",
            choices: [
                '<code>"Hello, ".concat("Java!")</code>',
                '<code>"Hello, ".append("Java!")</code>',
                '<code>"Hello, ".add("Java!")</code>',
                '<code>"Hello, ".plus("Java!")</code>',
            ],
            answerIndex: 0,
            explanation:
                'この問題は、文字列を連結して「Hello, Java!」と表示する方法を問うものです。\n\nJavaのString型には、文字列を連結するためのconcatメソッドがあります。\n\n"Hello, ".concat("Java!") と記述すると、\n2つの文字列が連結されて "Hello, Java!" という新しい文字列が作られます。\n\nappendやadd、plusといったメソッドはString型には存在しません。\n\nしたがって、正しいコードは concatメソッドを使ったものです。\n\n文字列連結には+演算子も使えますが、今回の選択肢ではconcatが正解となります。',
        },
        {
            id: 18,
            category: "Javaの基本データ型と文字列操作",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         System.out.println(10 + 20 + "30" + 40);\n 4.     }\n 5. }',
            choices: [
                "100が表示される",
                "10203040が表示される",
                "303040が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                'このプログラムでは、System.out.println(10 + 20 + "30" + 40); という式が使われています。\n\nまず、10 + 20 の計算が最初に行われ、結果は 30 になります。\n\n次に、30 と文字列 "30" の連結が行われます。数値と文字列を + で連結すると、数値が文字列に変換されて結合されます。\n\nこの時点で "3030" という文字列になります。\n\nさらに、"3030" と 40 を + で連結すると、40 も文字列に変換されて "303040" となります。\n\nこのように、最初に数値同士の加算が行われ、その後は左から順に文字列結合が進みます。\n\nしたがって、出力は "303040" です。',
        },
        {
            id: 19,
            category: "Javaの基本データ型と文字列操作",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String str = null;\n 4.         str += "null";\n 5.         System.out.println(str);\n 6.     }\n 7. }',
            choices: [
                "「null」と表示される",
                "「nullnull」と表示される",
                "何も表示されない",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                'このプログラムでは、String型の変数strにnullが代入されています。\n\nその後、str += "null"; という式が実行されます。\n\nこのとき、strがnullであっても、+演算子で文字列と連結しようとすると、nullは文字列"null"として扱われます。\n\nつまり、null + "null" は "nullnull" という文字列になります。\n\nそのため、System.out.println(str); で "nullnull" が表示されます。\n\nnullに対して+=で文字列を連結すると、"null"という文字列に変換される点に注意しましょう。',
        },
        {
            id: 20,
            category: "Javaの基本データ型と文字列操作",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         StringBuilder sb = new StringBuilder("abcde");\n 4.         System.out.println(sb.capacity());\n 5.     }\n 6. }',
            choices: ["0が表示される", "5が表示される", "16が表示される", "21が表示される"],
            answerIndex: 3,
            explanation:
                'このプログラムでは、StringBuilderのコンストラクタに"abcde"という文字列を渡してインスタンスを生成しています。\n\nStringBuilderの容量（capacity）は、初期値として16が設定され、さらに初期文字列の長さが加算されます。\n\n今回の場合、初期文字列"abcde"の長さは5です。\n\nしたがって、capacityは16+5=21となります。\n\nこのcapacityは、内部バッファが自動的に拡張されるまでに格納できる文字数を表します。\n\nよって、出力は21となります。',
        },
        {
            id: 21,
            category: "Javaの基本データ型と文字列操作",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         StringBuilder sb = new StringBuilder();\n 4.         sb.append("abcde");\n 5.         sb.reverse();\n 6.         sb.replace(1, 3, "a");\n 7.         System.out.println(sb);\n 8.     }\n 9. }',
            choices: [
                "「aade」と表示される",
                "「ade」と表示される",
                "「aba」と表示される",
                "「eaba」と表示される",
            ],
            answerIndex: 3,
            explanation:
                'このプログラムでは、まずStringBuilderに"abcde"をappendしています。\n\nreverse()メソッドで文字列が反転し、"edcba"となります。\n\n次にreplace(1, 3, "a")を実行します。\n\nreplace(開始, 終了, 置換文字列)は、開始インデックスから終了インデックスの直前までを指定した文字列で置き換えます。\n\nインデックス1は"d"、インデックス2は"c"なので、"d"と"c"が"a"に置き換わります。\n\n結果として、"eaba"となります。\n\nこのように、reverseで反転→replaceで一部置換の順に処理される点に注意しましょう。',
        },
        {
            id: 22,
            category: "Javaの基本データ型と文字列操作",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         StringBuilder sb = new StringBuilder("abcde");\n 4.         System.out.println(sb.indexOf("bcd"));\n 5.     }\n 6. }',
            choices: ["1が表示される", "2が表示される", "3が表示される", "4が表示される"],
            answerIndex: 0,
            explanation:
                '問題のコードでは、StringBuilderに"abcde"という文字列が格納されています。\n\nindexOfメソッドは、指定した文字列が最初に現れる位置（インデックス）を返します。\n\nこの場合、"abcde"の中で"bcd"が最初に現れるのは、インデックス1からです。\n\nインデックスは0から始まるため、"a"が0、"b"が1、"c"が2、"d"が3となります。\n\nしたがって、sb.indexOf("bcd")の結果は1となり、1が表示されます。\n\nindexOfは見つからない場合は-1を返しますが、今回は"bcd"が含まれているため1が返ります。',
        },
    ],
};
