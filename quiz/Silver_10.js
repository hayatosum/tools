const JAVA_SILVER_1Z0_815_JPN_10 = {
    prefix: "1Z0-815-JPN_10",
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
                "空配列に対して array[0] へ代入しようとして実行時に ArrayIndexOutOfBoundsException が発生し、catch 節で「error」を出力する。",
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
                "引数は空配列なので length==0 が真となり「A」を出力し、その後 finally で必ず「C」を出力する。",
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
                "最初の sample() で SampleException が送出され、最初の catch に捕捉されるため、SubSampleException が catch されることがなく到達できないコードとなりコンパイルエラーが発生する。",
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
                "try の直後に finally、その後に catch と書かれており構文違反。finally は catch 群の後に 1 回だけ記述できる。",
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
                '内側の try で NPE を捕捉し "A" を返すが、その前に finally で「B」を出力。main の println で "A" が表示されるため順に「B」「A」。',
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
                "finally の return は catch/try の return を上書きするため、最終的に 20 が返る。",
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
                "catch の return 値は finally 実行前に評価済み。finally でローカル変数を変更しても戻り値は 10 のまま。",
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
                "1つの try に対して finally は 1 つだけ。finally を連続して宣言しており構文エラー。",
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
                "内側の catch が例外を処理し「D」、続いて内側 finally の「E」、外側 finally の「G」の順で出力される。",
        },
        {
            id: 10,
            category: "例外処理",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.io.FileInputStream;\n 2. import java.io.FileNotFoundException;\n 3. \n 4. public class Sample {\n 5.     public static void main(String[] args) {\n 6.         try (FileInputStream is = new FileInputStream("sample.txt")) {\n 7.             throw new FileNotFoundException();\n 8.         } catch (Exception e) {\n 9.             System.out.println("A");\n10.         } finally {\n11.             if (is != null) {\n12.                 is.close();\n13.             }\n14.         }\n15.         System.out.println("B");\n16.     }\n17. }',
            choices: [
                "「A」と表示される",
                "「B」と表示される",
                "「A」「B」と表示される",
                "「B」「A」と表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 4,
            explanation:
                "try-with-resources で宣言した変数 is のスコープは try 節内のみ。finally で is を参照しておりコンパイルエラー。",
        },
        {
            id: 11,
            category: "例外処理",
            difficulty: "中級",
            question:
                "次の Sample クラスの2行目の空欄に入るコードとして、正しいものを選びなさい。（2つ選択）",
            code: ' 1. public class SampleException extends Exception {}\n\n 1. public class TestException extends RuntimeException {}\n\n 1. public class Sample {\n 2.     public void hello(String name) _________ {\n 3.         if (name == null) {\n 4.             throw new SampleException();\n 5.         }\n 6.         if ("".equals(name)) {\n 7.             throw new TestException();\n 8.         }\n 9.         // do something\n10.     }\n11. }',
            choices: [
                "throws SampleException, TestException",
                "throws SampleException; TestException",
                "throws TestException",
                "throws SampleException",
                "何も記述しなくてもよい",
            ],
            answerIndex: [0, 3],
            explanation:
                "チェック例外である SampleException を送出するためメソッド宣言に throws SampleException が必須。RuntimeException 系は任意なので同時に列挙してもよい。",
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
                "Error も Throwable であり try-catch で捕捉することは可能（推奨はされない）。したがって「例外処理を記述できない」は誤り。",
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
                "引数なしで実行すると args[0] が存在せず、配列境界外アクセスの ArrayIndexOutOfBoundsException。",
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
                "空のリストで get(0) を呼び出すと IndexOutOfBoundsException が送出される。",
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
                "A#equals で obj を A にキャストしており、B インスタンスを渡すと ClassCastException が発生する。",
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
            explanation: "str が null のため equals 呼び出し時点で NullPointerException。",
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
                "再帰的に main を呼び出し続けるためスタックが枯渇し StackOverflowError が送出される。",
        },
    ],
};
