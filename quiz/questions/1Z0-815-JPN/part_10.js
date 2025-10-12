const Q_1Z0_815_JPN_10 = {
    prefix: "1Z0-815-JPN",
    part: "10",
    questions: [
        {
            id: 1,
            category: "例外処理",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         try {\n 4.             int[] array = {};\n 5.             array[0] = 10;\n 6.             System.out.println("finish");\n 7.         } catch (ArrayIndexOutOfBoundsException e) {\n 8.             System.out.println("error");\n 9.         }\n10.     }\n11. }',
            choices: [
                "「finish」と表示される",
                "「error」と表示される",
                "「finish」「error」と表示される",
                "「error」「finish」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                '空の配列を作成し、その最初の要素に値を代入しようとしています。\n\nしかし、配列には要素がひとつもないため、存在しないインデックスにアクセスしようとした時点で例外（ArrayIndexOutOfBoundsException）が発生します。\n\nこの例外はcatch節で捕捉され、catch節の中の処理が実行されます。\n\nそのため、"finish"は出力されず、catch節のSystem.out.printlnで"error"だけが表示されます。\n\ntry-catch構文を使うことで、例外発生時の処理を安全に分岐できる点に注意しましょう。',
        },
        {
            id: 2,
            category: "例外処理",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。なお、実行時には起動パラメータを何も渡さないこととする。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         try {\n 4.             if (args.length == 0) {\n 5.                 System.out.println("A");\n 6.             }\n 7.         } catch (NullPointerException e) {\n 8.             System.out.println("B");\n 9.         } finally {\n10.             System.out.println("C");\n11.         }\n12.     }\n13. }',
            choices: [
                "「A」「B」「C」と表示される",
                "「A」「C」と表示される",
                "「B」「C」と表示される",
                "「A」「B」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                'このプログラムは、mainメソッドの引数argsに何も値を渡さずに実行されます。\n\nargsは空配列となるため、args.length == 0 の条件が成立し、tryブロック内で"A"が出力されます。\n\n例外は発生しないためcatch節の処理は実行されません。\n\nfinally節は、例外の有無にかかわらず必ず実行されるため、最後に"C"が出力されます。\n\nそのため、実行結果として"A"と"C"がこの順番で表示されます。\n\nコマンドライン引数が空配列であること、try-catch-finallyの実行順序に注意しましょう。',
        },
        {
            id: 3,
            category: "例外処理",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class SampleException extends Exception {}\n\n 1. public class SubSampleException extends SampleException {}\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         try {\n 4.             sample();\n 5.             sub();\n 6.         } catch (SampleException e) {\n 7.             System.out.println("A");\n 8.         } catch (SubSampleException e) {\n 9.             System.out.println("B");\n10.         }\n11.     }\n12. \n13.     private static void sample() throws SampleException {\n14.         throw new SampleException();\n15.     }\n16. \n17.     private static void sub() throws SubSampleException {\n18.         throw new SubSampleException();\n19.     }\n20. }',
            choices: [
                "「A」と表示される",
                "「B」と表示される",
                "「B」「A」と表示される",
                "何も表示されない",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 4,
            explanation:
                "このプログラムでは、2つの例外クラスが継承関係にあります。\n\ncatch節の順序に注意が必要です。\n\n親クラスの例外（SampleException）を先にcatchしてしまうと、子クラスの例外（SubSampleException）はすべて親クラスのcatchで捕捉されてしまいます。\n\nそのため、子クラスのcatch節には制御が到達せず、コンパイルエラーとなります。\n\n例外の継承関係がある場合は、必ず子クラスのcatchを先に書き、親クラスのcatchを後に書く必要があります。\n\ncatch節の順序と例外の継承関係に注意しましょう。",
        },
        {
            id: 4,
            category: "例外処理",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         try {\n 4.             Object obj = null;\n 5.             System.out.println(obj.toString());\n 6.             System.out.println("A");\n 7.         } finally {\n 8.             System.out.println("B");\n 9.         } catch (NullPointerException e) {\n10.             System.out.println("C");\n11.         }\n12.     }\n13. }',
            choices: [
                "「B」「C」と表示される",
                "「C」「B」と表示される",
                "「A」「C」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 3,
            explanation:
                "このプログラムは、tryの直後にfinally、その後にcatchが記述されています。\n\nJavaでは、catch節はtryの直後に書き、finally節はcatch群の後に1回だけ記述できます。\n\nこのようにfinallyの後にcatchを書くことはできないため、構文エラーとなります。\n\n例外処理の構文ルールとして、catchとfinallyの記述順に注意しましょう。",
        },
        {
            id: 5,
            category: "例外処理",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         System.out.println(test(null));\n 4.     }\n 5. \n 6.     private static String test(Object obj) {\n 7.         try {\n 8.             System.out.println(obj.toString());\n 9.         } catch (NullPointerException e) {\n10.             return "A";\n11.         } finally {\n12.             System.out.println("B");\n13.         }\n14.         return "C";\n15.     }\n16. }',
            choices: [
                "「A」と表示される",
                "「A」「B」と表示される",
                "「B」「A」と表示される",
                "「C」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                'このプログラムでは、mainメソッドからtestメソッドにnullを渡して呼び出しています。\n\ntryブロック内でobj.toString()を実行しようとしますが、objがnullのため、ここでNullPointerExceptionが発生します。\n\nこの例外はcatch節で捕捉され、catch節のreturn文によって文字列が返されます。\n\nただし、catchやtryでreturnがあっても、finally節は必ず実行されるため、まずfinally節の中で"B"が出力されます。\n\nその後、catch節で返された値がmainメソッドのprintlnで出力されます。\n\nそのため、実行結果として"B"と"A"がこの順番で表示されます。\n\nfinally節はreturnよりも先に必ず実行される点に注意しましょう。',
        },
        {
            id: 6,
            category: "例外処理",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int result = sample();\n 4.         System.out.println(result);\n 5.     }\n 6.     private static int sample() {\n 7.         try {\n 8.             throw new RuntimeException();\n 9.         } catch (RuntimeException e) {\n10.             return 10;\n11.         } finally {\n12.             return 20;\n13.         }\n14.     }\n15. }",
            choices: [
                "10が表示される",
                "20が表示される",
                "30が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                "sampleメソッド内で例外が発生しcatch節で値を返そうとしても、finally節でreturnが記述されている場合は、finally節のreturnが最終的な戻り値として必ず採用されます。\n\nこのプログラムでは、catch節で10を返そうとしていますが、finally節のreturn 20;によって20が返されます。\n\nそのため、出力は20となります。\n\nfinally節にreturnを書くとcatchやtryのreturnは無視される点に注意しましょう。",
        },
        {
            id: 7,
            category: "例外処理",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         int result = sample();\n 4.         System.out.println(result);\n 5.     }\n 6.     private static int sample() {\n 7.         int val = 0;\n 8.         try {\n 9.             String[] array = {"A","B","C"};\n10.             System.out.println(array[3]);\n11.         } catch (RuntimeException e) {\n12.             val = 10;\n13.             return val;\n14.         } finally {\n15.             val += 10;\n16.         }\n17.         return val;\n18.     }\n19. }',
            choices: [
                "0が表示される",
                "10が表示される",
                "20が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                "catch節でvalに10を代入しreturnしていますが、catchのreturnはfinally節の実行前に戻り値として一時保存されます。\n\nfinally節ではvalに10を加えていますが、これはローカル変数valの値を変更しているだけで、catchでreturnされた値には影響しません。\n\nそのため、最終的に返される値はcatch節でreturnされた10となります。\n\nfinally節でローカル変数を変更しても、catchやtryのreturn値には反映されない点に注意しましょう。",
        },
        {
            id: 8,
            category: "例外処理",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         try {\n 4.             System.out.println("A");\n 5.         } finally {\n 6.             System.out.println("B");\n 7.         } finally {\n 8.             System.out.println("C");\n 9.         }\n10.     }\n11. }',
            choices: [
                "「A」「B」「C」と表示される",
                "「A」「B」と表示される",
                "「A」「C」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 3,
            explanation:
                "このプログラムでは、1つのtry文に対してfinally節が2つ連続して記述されています。\n\nJavaの構文ルールでは、try文に対応できるfinally節は1つだけです。\n\nfinally節を複数記述することはできないため、このコードは構文エラー（コンパイルエラー）となります。\n\n例外処理の構文ルールとして、finally節は1つしか書けない点に注意しましょう。",
        },
        {
            id: 9,
            category: "例外処理",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         try {\n 4.             try {\n 5.                 String[] array = {"A","B","C"};\n 6.                 System.out.println(array[3]);\n 7.             } catch (ArrayIndexOutOfBoundsException e) {\n 8.                 System.out.println("D");\n 9.             } finally {\n10.                 System.out.println("E");\n11.             }\n12.         } catch (ArrayIndexOutOfBoundsException e) {\n13.             System.out.println("F");\n14.         } finally {\n15.             System.out.println("G");\n16.         }\n17.     }\n18. }',
            choices: [
                "「C」「E」「G」と表示される",
                "「D」「E」「G」と表示される",
                "「E」「F」「G」と表示される",
                "「D」「E」と表示される",
                "「F」「G」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                'このプログラムは、try-catch-finally構文が入れ子になっています。\n\n内側のtryブロックで配列の存在しないインデックス（array[3]）にアクセスしようとするため、ArrayIndexOutOfBoundsExceptionが発生します。\n\nこの例外はすぐ内側のcatch節で捕捉され、まず"D"が出力されます。\n\ncatch節の後、内側のfinally節が必ず実行されるため、続けて"E"が出力されます。\n\n例外は内側で処理されているため、外側のcatch節は実行されません。\n\n最後に、外側のfinally節が必ず実行され、"G"が出力されます。\n\nそのため、実行結果は"D"、"E"、"G"の順に表示されます。\n\n入れ子のtry-catch-finally構文では、例外が内側で処理された場合でも両方のfinally節が必ず実行される点に注意しましょう。',
        },
        {
            id: 10,
            category: "例外処理",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.io.FileInputStream;\n 2. import java.io.FileNotFoundException;\n 3. \n 4. public class Sample {\n 5.     public static void main(String[] args) {\n 6.         try (FileInputStream is = new FileInputStream("sample.txt")) {\n 7.             throw new FileNotFoundException();\n 8.         } catch (Exception e) {\n 9.             System.out.println("A");\n10.         } finally {\n11.             if (is != null) {\n12.                 is.close();\n13.             }\n14.         System.out.println("B");\n15.         }\n16.     }\n17. }',
            choices: [
                "「A」と表示される",
                "「B」と表示される",
                "「A」「B」と表示される",
                "「B」「A」と表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 4,
            explanation:
                "このプログラムでは、try-with-resources構文を使ってFileInputStream型の変数を宣言しています。\n\ntry-with-resourcesで宣言した変数のスコープはtryブロック内だけです。そのため、finally節でこの変数を参照しようとすると、スコープ外参照となりコンパイルエラーになります。\n\nまた、finally節でリソースのクローズ処理を手動で書く必要はなく、try-with-resourcesを使えば自動的にクローズされます。\n\nこのように、try-with-resourcesで宣言した変数はfinally節では使えない点と、リソースの自動解放の仕組みに注意しましょう。",
        },
        {
            id: 11,
            category: "例外処理",
            difficulty: "中級",
            question:
                "次の Sample クラスの2行目の空欄に入るコードとして、正しいものを選びなさい。（2つ選択）",
            code: ' 1. public class SampleException extends Exception {}\n\n 1. public class TestException extends RuntimeException {}\n\n 1. public class Sample {\n 2.     public void hello(String name) _________ {\n 3.         if (name == null) {\n 4.             throw new SampleException();\n 5.         }\n 6.         if ("".equals(name)) {\n 7.             throw new TestException();\n 8.         }\n 9.         // do something\n10.     }\n11. }',
            choices: [
                "<code>throws SampleException, TestException</code>",
                "<code>throws SampleException; TestException</code>",
                "<code>throws TestException</code>",
                "<code>throws SampleException</code>",
                "<code>何も記述しなくてもよい</code>",
            ],
            answerIndex: [0, 3],
            explanation:
                "このメソッドでは、2種類の例外をスローする可能性があります。\n\nSampleExceptionはExceptionを継承したチェック例外なので、メソッド宣言にthrows SampleExceptionと明記する必要があります。\n\n一方、TestExceptionはRuntimeExceptionを継承した例外（非チェック例外）なので、throws句に書いても書かなくても構いません。\n\nそのため、throws SampleExceptionだけ、または両方をカンマ区切りで列挙したthrows SampleException, TestExceptionのどちらも正しい記述となります。\n\nチェック例外と非チェック例外の違い、throws句の記述ルールに注意しましょう。",
        },
        {
            id: 12,
            category: "例外処理",
            difficulty: "初級",
            question: "エラーに関する説明として、誤っているものを選びなさい。（1つ選択）",
            code: "",
            choices: [
                "エラーは、プログラムの実行環境で重大な異常が発生したときにスローされる",
                "エラーは、Errorクラスを継承した型である",
                "エラーは throws句に宣言する必要はない",
                "エラーは例外処理を記述できない",
            ],
            answerIndex: 3,
            explanation:
                "エラー（Error）は、プログラムの実行環境で重大な異常が発生したときにスローされる特別な例外です。\n\nErrorクラスを継承した型であり、通常の例外（Exception）とは区別されます。\n\nエラーはthrows句に宣言する必要はありませんが、try-catch文で捕捉することは可能です（ただし推奨はされません）。\n\nしたがって「エラーは例外処理を記述できない」という説明は誤りです。\n\nErrorもThrowableのサブクラスであり、catch節で捕捉できる点に注意しましょう。",
        },
        {
            id: 13,
            category: "例外処理",
            difficulty: "初級",
            question:
                "次のプログラムを確認してください。このプログラムを次のコマンドで実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: "> java Main\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         System.out.println(args[0].length());\n 4.     }\n 5. }",
            choices: [
                "「null」と表示される",
                "「0」と表示される",
                "ArrayIndexOutOfBoundsExceptionが発生する",
                "NullPointerExceptionが発生する",
            ],
            answerIndex: 2,
            explanation:
                "このプログラムは、コマンドライン引数を指定せずに実行した場合の動作を問う問題です。\n\nmainメソッドの引数argsは空配列となります。そのため、args[0]にアクセスしようとすると、配列の要素が存在しないためArrayIndexOutOfBoundsExceptionが発生します。\n\nこの例外は、配列の範囲外のインデックスにアクセスしたときにスローされる例外です。\n\nnullや0が表示されることはなく、またNullPointerExceptionも発生しません。\n\nコマンドライン引数の扱いと、配列アクセス時の例外に注意しましょう。",
        },
        {
            id: 14,
            category: "例外処理",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときに発生する例外の種類として、正しいものを選びなさい。（1つ選択）",
            code: " 1. import java.util.ArrayList;\n 2. import java.util.List;\n 3. \n 4. public class Main {\n 5.     public static void main(String[] args) {\n 6.         List<String> list = new ArrayList<>();\n 7.         list.get(0);\n 8.     }\n 9. }",
            choices: [
                "IndexOutOfBoundsException",
                "ArrayIndexOutOfBoundsException",
                "StringIndexOutOfBoundsException",
                "ListIndexOutOfBoundsException",
            ],
            answerIndex: 0,
            explanation:
                "このプログラムでは、空のArrayListを生成し、list.get(0)で要素を取得しようとしています。\n\nリストに要素が1つも存在しない状態でインデックス0を指定してアクセスすると、IndexOutOfBoundsExceptionがスローされます。\n\nこの例外は、リストやコレクションの範囲外インデックスにアクセスした場合に発生します。\n\n配列の場合はArrayIndexOutOfBoundsExceptionですが、Listインターフェースの実装（ArrayListなど）ではIndexOutOfBoundsExceptionが使われる点に注意しましょう。",
        },
        {
            id: 15,
            category: "例外処理",
            difficulty: "中級",
            question:
                "次のプログラムを確認してください。これらのクラスを利用する以下のプログラムを、コンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class A {\n 2.     private int num;\n 3.     public A(int num) { this.num = num; }\n 4.     public boolean equals(Object obj) {\n 5.         A a = (A) obj;            \n 6.         return this.num == a.num;\n 7.     }\n 8. }\n\n 1. public class B {\n 2.     private int num;\n 3.     public B(int num) { this.num = num; }\n 4.     public boolean equals(Object obj) {\n 5.         B b = (B) obj;            \n 6.         return this.num == b.num;\n 7.     }\n 8. }\n\n 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         A a = new A(10);\n 4.         B b = new B(10);\n 5.         System.out.println(a.equals(b));\n 6.     }\n 7. }",
            choices: [
                "trueが表示される",
                "falseが表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 3,
            explanation:
                "このプログラムでは、AクラスとBクラスがそれぞれequalsメソッドを独自に実装しています。\n\nA#equalsでは、引数objをA型にキャストして比較していますが、実際にはB型のインスタンスが渡される場合があります。\n\nこのとき、A型へのキャストが失敗し、ClassCastException（実行時例外）が発生します。\n\nこのように、equalsメソッドで型チェックを行わずにキャストすると、異なる型のオブジェクトを比較した際に例外が発生する点に注意しましょう。\n\n安全なequals実装には、instanceofによる型チェックが推奨されます。",
        },
        {
            id: 16,
            category: "例外処理",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         String str = null;\n 4.         if (str.equals("")) {\n 5.             System.out.println("blank");\n 6.         } else {\n 7.             System.out.println("null");\n 8.         }\n 9.     }\n10. }',
            choices: [
                "「blank」と表示される",
                "「null」と表示される",
                "IllegalArgumentExceptionが発生する",
                "NullPointerExceptionが発生する",
            ],
            answerIndex: 3,
            explanation:
                'このプログラムでは、str変数にnullが代入されています。\n\nif文でstr.equals("")と呼び出していますが、strがnullのため、equalsメソッドを呼び出した時点でNullPointerExceptionが発生します。\n\nnull参照でメソッドを呼び出すと、必ずNullPointerExceptionとなる点に注意しましょう。\n\n"blank"や"null"が表示されることはありません。',
        },
        {
            id: 17,
            category: "例外処理",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Main {\n 2.     public static void main(String[] args) {\n 3.         main(args);\n 4.     }\n 5. }",
            choices: [
                "何も表示されない",
                "StackOverflowErrorが発生する",
                "IllegalStateExceptionが発生する",
                "ExceptionInInitializerErrorが発生する",
            ],
            answerIndex: 1,
            explanation:
                "このプログラムは、mainメソッドの中で自分自身（main）を再び呼び出しています。\n\nこのように、終了条件のない再帰呼び出しが続くと、呼び出しのたびにメモリ上のスタック領域が消費されていきます。\n\n最終的にスタック領域がいっぱいになると、Java仮想マシンによってStackOverflowErrorがスローされます。\n\n何も表示されることなく、プログラムはエラーで異常終了します。\n\n再帰呼び出しには必ず終了条件を設ける必要がある点に注意しましょう。",
        },
    ],
};
