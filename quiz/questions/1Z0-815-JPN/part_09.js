const Q_1Z0_815_JPN_09 = {
    prefix: "1Z0-815-JPN",
    part: "09",
    questions: [
        {
            id: 1,
            category: "API",
            difficulty: "中級",
            question:
                "次の計算式を使い、毎年積立を行って複利運用したときの金額を計算したい。この計算を行うコードとして正しいものを選びなさい。（1つ選択）\n![](img/1Z0-815-JPN_09-001_q.png)",
            code: "",
            choices: [
                "<code>n = (int) (m * (Math.pow((1 + r), x) - 1) / r);</code>",
                "<code>n = (int) (m * (Math.pow(x, (1 + r)) - 1) / r);</code>",
                "<code>n = (int) (m * (Math.sqrt((1 + r)) - 1) / r);</code>",
                "<code>n = (int) (m * (Math.sqrt((1 + r), x) - 1) / r);</code>",
            ],
            answerIndex: 0,
            explanation:
                "複利運用で毎年積立を行った場合の将来の金額は、n = m * ((1 + r)^x - 1) / r という公式で計算します。\n\nJavaで累乗計算を行うには、Math.pow(底, 指数) を使います。\nこの場合、(1 + r) を x 乗する必要があるため、Math.pow((1 + r), x) となります。\n\nしたがって、m * (Math.pow((1 + r), x) - 1) / r という式が正しい実装です。\n\n他の選択肢は、累乗の順序やメソッドの使い方が誤っている、または平方根を使っているため、複利計算の公式とは異なります。",
        },
        {
            id: 2,
            category: "API",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行した結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Sample {\n 2.     private int id;\n 3.     private String name;\n 4.     public Sample(int id, String name) {\n 5.         super();\n 6.         this.id = id;\n 7.         this.name = name;\n 8.     }\n 9.     public int getId() {\n10.         return id;\n11.     }\n12.     public String getName() {\n13.         return name;\n14.     }\n15. }\n\n 1. import java.util.Comparator;\n 2. \n 3. public class SampleComparator implements Comparator<Sample> {\n 4.     @Override\n 5.     public int compare(Sample s1, Sample s2) {\n 6.         if (s1.getId() < s2.getId()) {\n 7.             return 1;\n 8.         }\n 9.         if (s2.getId() < s1.getId()) {\n10.             return -1;\n11.         }\n12.         return 0;\n13.     }\n14. }\n\n 1. import java.util.ArrayList;\n 2. import java.util.Arrays;\n 3. import java.util.List;\n 4. \n 5. public class Main {\n 6.     public static void main(String[] args) {\n 7.         Sample[] samples = {\n 8.             new Sample(2, "B"),\n 9.             new Sample(3, "C"),\n10.             new Sample(1, "A")\n11.         };\n12. \n13.         List<Sample> list = new ArrayList<>(Arrays.asList(samples));\n14.         list.sort(new SampleComparator());\n15.         for (Sample s : list) {\n16.             System.out.println(s.getName());\n17.         }\n18.     }\n19. }',
            choices: [
                "「A」「B」「C」と表示される",
                "「B」「C」「A」と表示される",
                "「C」「B」「A」と表示される",
                "何も表示されない",
            ],
            answerIndex: 2,
            explanation:
                "このプログラムでは、Sampleクラスのidフィールドを基準にリストを並べ替えています。\n\nSampleComparatorのcompareメソッドでは、idが小さい方を後ろ、大きい方を前にするように1または-1を返しています。\n\nそのため、idが大きい順（降順）に並び替えられ、名前の出力順は「C」「B」「A」となります。\n\n通常の昇順ソートとは逆の順序になる点に注意が必要です。",
        },
        {
            id: 3,
            category: "API",
            difficulty: "初級",
            question:
                "次のプログラムを実行し、「3」「2」「1」と表示したい。7行目の空欄に入るコードとして正しいものを選びなさい。（1つ選択）",
            code: " 1. import java.util.Arrays;\n 2. import java.util.List;\n 3. \n 4. public class Main {\n 5.     public static void main(String[] args) {\n 6.         List<Integer> list = Arrays.asList(new Integer[]{1, 2, 3});\n 7.         __________\n 8.         for (Integer num : list) {\n 9.             System.out.println(num);\n10.         }\n11.     }\n12. }",
            choices: [
                "<code>list.sort((a, b) -> a.compareTo(b));</code>",
                "<code>list.sort(() -> a.compareTo(b));</code>",
                "<code>list.sort((a) -> a.compareTo(b));</code>",
                "<code>list.sort((a, b) -> -a.compareTo(b));</code>",
            ],
            answerIndex: 3,
            explanation:
                "このプログラムでは、リストの要素を降順（大きい順）に並べ替えて「3」「2」「1」と表示したいという意図です。\n\nlist.sort((a, b) -> -a.compareTo(b)); のように、比較結果にマイナスを付けることで、通常の昇順とは逆の降順に並び替えることができます。\n\n他の選択肢は、比較方法やラムダ式の書き方が誤っているため、意図した降順にはなりません。\n\nこのように、リストの並び順を制御したい場合は、Comparatorの実装やラムダ式の使い方に注意が必要です。",
        },
        {
            id: 4,
            category: "API",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: " 1. public class Sample {\n 2.     public static void main(String[] args) {\n 3.         char a = '0';\n 4.         int num = 0;\n 5.         if (Character.isAlphabetic(a)) {\n 6.             num++;\n 7.         }\n 8.         if (Character.isDigit(a)) {\n 9.             num++;\n10.         }\n11.         if (Character.isLowerCase(a)) {\n12.             num++;\n13.         }\n14.         System.out.println(num);\n15.     }\n16. }",
            choices: [
                "0が表示される",
                "1が表示される",
                "2が表示される",
                "3が表示される",
                "コンパイルエラーが発生する",
            ],
            answerIndex: 1,
            explanation:
                "このプログラムでは、char型の変数aに'0'（数字のゼロ）が代入されています。\n\nCharacter.isAlphabetic(a)は、aがアルファベットかどうかを判定しますが、'0'はアルファベットではないのでfalseです。\n\nCharacter.isDigit(a)は、aが数字かどうかを判定します。'0'は数字なのでtrueとなり、numが1増えます。\n\nCharacter.isLowerCase(a)は、aが小文字のアルファベットかどうかを判定しますが、'0'は該当しないためfalseです。\n\nしたがって、最終的にnumの値は1となり、1が表示されます。",
        },
        {
            id: 5,
            category: "API",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.time.LocalDate;\n 2. \n 3. public class Sample {\n 4.     public static void main(String[] args) {\n 5.         LocalDate a = LocalDate.of(2015, 0, 1);\n 6.         LocalDate b = LocalDate.parse("2015-01-01");\n 7.         System.out.println(a.equals(b));\n 8.     }\n 9. }',
            choices: [
                "trueが表示される",
                "falseが表示される",
                "5行目でコンパイルエラーが発生する",
                "6行目でコンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 4,
            explanation:
                'このプログラムでは、LocalDate.of(2015, 0, 1) で日付を生成しようとしています。\n\nLocalDate.ofの月の指定は1から12までの整数で、0を指定すると不正な値となります。\n\nそのため、実行時にjava.time.DateTimeExceptionがスローされます。\n\n一方、LocalDate.parse("2015-01-01")は正しく2015年1月1日を表す日付を生成します。\n\nこのように、月の指定方法に注意しないと、実行時例外が発生することがあります。',
        },
        {
            id: 6,
            category: "API",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの正しいものを選びなさい。なお、現在の日付を2019年8月20日とする。（1つ選択）",
            code: ' 1. import java.time.DayOfWeek;\n 2. import java.time.LocalDate;\n 3. \n 4. public class Sample {\n 5.     public static void main(String[] args) {\n 6.         LocalDate a = LocalDate.of(2019, 8, 19);\n 7.         LocalDate b = LocalDate.now();\n 8.         b.with(DayOfWeek.MONDAY);\n 9.         System.out.println(a.equals(b) + "," + a.isBefore(b));\n10.     }\n11. }',
            choices: [
                "「true, true」と表示される",
                "「false, false」と表示される",
                "「true, false」と表示される",
                "「false, true」と表示される",
            ],
            answerIndex: 3,
            explanation:
                "このプログラムでは、LocalDate.of(2019, 8, 19) で変数aに2019年8月19日の日付が代入されます。\n\nLocalDate.now() は問題の指定により2019年8月20日を返し、変数bに代入されます。\n\nb.with(DayOfWeek.MONDAY) は、bと同じ週の月曜日の日付（2019年8月19日）を新しいインスタンスとして返しますが、\nこのコードではbに再代入していないため、bの値は2019年8月20日のままです。\n\na.equals(b) は、aとbが同じ日付かどうかを判定します。aは2019年8月19日、bは2019年8月20日なので、結果はfalseです。\n\na.isBefore(b) は、aがbより前の日付かどうかを判定します。aはbより前の日付なので、結果はtrueです。\n\nしたがって、出力は「false, true」となります。\n\nwithメソッドは元のインスタンスを変更せず、新しい日付のインスタンスを返す点に注意しましょう。",
        },
        {
            id: 7,
            category: "API",
            difficulty: "初級",
            question: "次のうち、ArrayListの説明として正しいものを選びなさい。（3つ選択）",
            code: "",
            choices: [
                "nullは扱えない",
                "動的な配列として動作する",
                "重複した値は扱えない",
                "スレッドセーフではない",
                "値を追加する箇所を制御できる",
            ],
            answerIndex: [1, 3, 4],
            explanation:
                "ArrayListの特徴について、正しいポイントを解説します。\n\n・ArrayListは動的な配列として動作し、要素数が自動的に増減します。\n\n・スレッドセーフではないため、複数のスレッドから同時に操作する場合は注意が必要です。\n\n・要素の追加時に、どの位置に追加するか（インデックス指定）を制御できます。\n\n・null値や重複した値も格納可能です。\n\nそのため、「nullは扱えない」「重複した値は扱えない」という説明は誤りです。\n\nArrayListの基本的な性質を理解しておきましょう。",
        },
        {
            id: 8,
            category: "API",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.ArrayList;\n 2. \n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         ArrayList list = new ArrayList();\n 6.         list.add("A");\n 7.         list.add(10);\n 8.         list.add("B");\n 9.         for (Object obj : list) {\n10.             System.out.print(obj);\n11.         }\n12.     }\n13. }',
            choices: [
                "5行目でコンパイルエラーが発生する",
                "6行目でコンパイルエラーが発生する",
                "7行目でコンパイルエラーが発生する",
                "8行目でコンパイルエラーが発生する",
                "9行目でコンパイルエラーが発生する",
                "「A10B」と表示される",
                "実行時に例外がスローされる",
            ],
            answerIndex: 5,
            explanation:
                'このプログラムの動作を順を追って解説します。\n\n・ArrayListはジェネリクスを指定していないため、どんな型のオブジェクトも格納できます。\n\n・6行目で文字列"A"、7行目で整数10、8行目で文字列"B"を追加しています。\n\n・for文でリストの全要素を順に取り出し、printで出力しています。\n\n・そのため、"A"、10、"B"が順に出力され、結果は「A10B」となります。\n\n・ジェネリクスを指定しない場合、異なる型の値も混在して格納できる点に注意しましょう。\n\n・また、どの行でもコンパイルエラーや実行時例外は発生しません。',
        },
        {
            id: 9,
            category: "API",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.ArrayList;\n 2. \n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         ArrayList<String> list = new ArrayList<>();\n 6.         list.add("A");\n 7.         list.add(2, "B");\n 8.         list.add("C");\n 9.         list.add("D");\n10.         for (String str : list) {\n11.             System.out.print(str);\n12.         }\n13.     }\n14. }',
            choices: [
                "「ABCD」と表示される",
                "「ACBD」と表示される",
                "「ACDB」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 4,
            explanation:
                'このプログラムの動作を順に解説します。\n\n・ArrayList<String> list = new ArrayList<>(); で空のリストを作成します。\n\n・list.add("A"); でリストは [A] となります。\n\n・list.add(2, "B"); で、インデックス2に要素を追加しようとしていますが、現在リストのサイズは1です。\n\n・ArrayListのadd(インデックス, 要素)は、指定したインデックスがリストのサイズと同じかそれ以下でなければなりません。\n\n・この場合、インデックス2は範囲外のため、実行時にIndexOutOfBoundsExceptionがスローされます。\n\n・そのため、プログラムは例外が発生して途中で停止します。\n\naddメソッドでインデックスを指定する場合は、現在のリストサイズに注意しましょう。',
        },
        {
            id: 10,
            category: "API",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.ArrayList;\n 2. \n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         ArrayList<String> list = new ArrayList<>();\n 6.         list.add("A");\n 7.         list.set(0, "B");\n 8.         list.add("C");\n 9.         list.set(1, "D");\n10.         for (String str : list) {\n11.             System.out.print(str);\n12.         }\n13.     }\n14. }',
            choices: [
                "「BD」と表示される",
                "「AD」と表示される",
                "「BC」と表示される",
                "「BCD」と表示される",
                "「ABCD」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 0,
            explanation:
                'このプログラムの動作を順に解説します。\n\n・まず、空のArrayListを作成し、"A"を追加します。リストの中身は [A] となります。\n\n・set(0, "B") で、インデックス0の要素を "B" に置き換えます。リストは [B] となります。\n\n・add("C") で末尾に "C" を追加し、リストは [B, C] となります。\n\n・set(1, "D") で、インデックス1の要素（"C"）を "D" に置き換えます。リストは [B, D] となります。\n\n・for文でリストの全要素を順に出力するため、結果は「BD」となります。\n\naddは要素の追加、setは既存要素の上書きである点に注意しましょう。',
        },
        {
            id: 11,
            category: "API",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Item {\n 2.     private String name;\n 3.     private int price;\n 4.     public Item(String name, int price) {\n 5.         this.name = name;\n 6.         this.price = price;\n 7.     }\n 8.     public boolean equals(Object obj) {\n 9.         if (obj instanceof Item) {\n10.             Item tmp = (Item) obj;\n11.             if (tmp.name.equals(this.name)) {\n12.                 return true;\n13.             }\n14.         }\n15.         return false;\n16.     }\n17.     public String getName() {\n18.         return name;\n19.     }\n20. }\n\n 1. import java.util.ArrayList;\n 2. \n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         ArrayList<Item> list = new ArrayList<>();\n 6.         list.add(new Item("A", 100));\n 7.         list.add(new Item("B", 200));\n 8.         list.add(new Item("C", 300));\n 9.         list.add(new Item("A", 100));\n10.         list.remove(new Item("A", 500));\n11.         for (Item item : list) {\n12.             System.out.println(item.getName());\n13.         }\n14.     }\n15. }',
            choices: [
                "「A」「B」「C」「A」と表示される",
                "「B」「C」「A」と表示される",
                "「B」「C」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                'このプログラムの動作を順に解説します。\n\n・Itemクラスはnameとpriceを持ち、equalsメソッドはnameフィールドだけを比較します。\n\n・ArrayListに4つのItemオブジェクトを追加します（nameやpriceが同じものも含む）。\n\n・list.remove(new Item("A", 500)); で、nameが同じItemをリストから1つ削除します。\n\n・equalsメソッドはpriceを無視してnameだけで比較するため、最初に追加したnameが同じItemが削除されます。\n\n・残ったリストの要素は、nameが「B」「C」「A」の順になります。\n\nこのように、equalsメソッドの実装によって、比較や削除の動作が変わる点に注意しましょう。',
        },
        {
            id: 12,
            category: "API",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.ArrayList;\n 2. \n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         ArrayList<String> list = new ArrayList<>();\n 6.         list.add("A");\n 7.         list.add("B");\n 8.         list.add("C");\n 9.         for (String str : list) {\n10.             if ("B".equals(str)) {\n11.                 list.remove(str);\n12.             } else {\n13.                 System.out.println(str);\n14.             }\n15.         }\n16.     }\n17. }',
            choices: [
                "「A」「C」と表示される",
                "「A」「B」「C」と表示される",
                "「A」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 4,
            explanation:
                'このプログラムの動作を順に解説します。\n\n・ArrayListに"A"、"B"、"C"を追加し、リストは [A, B, C] となります。\n\n・拡張for文でリストを走査し、要素が"B"の場合にlist.remove(str)で削除しようとしています。\n\n・しかし、拡張for文（for-each）は内部的にイテレータを使ってリストを走査しています。\n\n・イテレーション中に直接リストの要素をremoveすると、イテレータとリストの状態が不整合となり、ConcurrentModificationException（実行時例外）がスローされます。\n\n・このため、プログラムは例外が発生して途中で停止します。\n\n拡張for文でコレクションの要素を削除する場合は、イテレータのremoveメソッドを使う必要があります。',
        },
        {
            id: 13,
            category: "API",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.ArrayList;\n 2. \n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         ArrayList<String> list = new ArrayList<>();\n 6.         list.add("A");\n 7.         list.add("B");\n 8.         list.add("C");\n 9.         list.add("D");\n10.         list.add("E");\n11. \n12.         for (String str : list) {\n13.             if ("C".equals(str)) {\n14.                 list.remove(str);\n15.             }\n16.         }\n17. \n18.         for (String str : list) {\n19.             System.out.println(str);\n20.         }\n21.     }\n22. }',
            choices: [
                "「A」「B」「D」「E」と表示される",
                "「A」「B」「C」「D」「E」と表示される",
                "「A」「B」「E」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 4,
            explanation:
                'このプログラムの動作を順に解説します。\n\n・ArrayListに複数の文字列を追加し、リストは [A, B, C, D, E] となります。\n\n・拡張for文でリストを走査し、要素が"C"の場合にlist.remove(str)で削除しようとしています。\n\n・拡張for文（for-each）は内部的にイテレータを使ってリストを走査しています。\n\n・イテレーション中に直接リストの要素をremoveすると、イテレータとリストの状態が不整合となり、ConcurrentModificationException（実行時例外）がスローされます。\n\n・このため、プログラムは例外が発生して途中で停止します。\n\n拡張for文でコレクションの要素を削除する場合は、イテレータのremoveメソッドを使う必要があります。',
        },
        {
            id: 14,
            category: "API",
            difficulty: "中級",
            question: "次のうち、値を変更できない固定長のリストを作るものを選びなさい。（2つ選択）",
            code: "",
            choices: [
                "<code>var list = List.of(1,2,3);</code>",
                "<code>var list = new ArrayList<Integer>();</code>",
                "<code>var list = Arrays.asList(new Integer[]{1,2,3});</code>",
                "<code>var list = new ArrayList<Integer>(3);</code>",
            ],
            answerIndex: [0, 2],
            explanation:
                "List.of(...) と Arrays.asList(...) の違いと、固定長リストの特徴を丁寧に解説します。\n\n・List.of(1,2,3) は、Java 9以降で導入された不変リストを生成します。\n  このリストは要素の追加・削除・変更ができません。\n\n・Arrays.asList(new Integer[]{1,2,3}) は、配列を元にした固定長リストを返します。\n  このリストは要素の追加・削除はできませんが、既存要素の上書き（set）は可能です。\n\n・new ArrayList<Integer>() や new ArrayList<Integer>(3) は、可変長リスト（要素の追加・削除・変更が可能）を生成します。\n\nしたがって、値を変更できない固定長リストを作るのは、List.of(...) と Arrays.asList(...) です。\n\nList.of(...) は完全な不変リスト、Arrays.asList(...) はサイズ固定リスト（setは可能）という違いも覚えておきましょう。",
        },
        {
            id: 15,
            category: "API",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.Arrays;\n 2. \n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         String[] a = {"b", "c"};\n 6.         String[] b = {"a", "b", "c"};\n 7.         System.out.println(Arrays.mismatch(a, b));\n 8.     }\n 9. }',
            choices: [
                "falseが表示される",
                "trueが表示される",
                "-1が表示される",
                "0が表示される",
                "1が表示される",
            ],
            answerIndex: 3,
            explanation:
                'Arrays.mismatch の動作を丁寧に解説します。\n\n・Arrays.mismatch(配列1, 配列2) は、2つの配列を先頭から順に比較し、最初に異なる要素のインデックスを返します。\n\n・すべての要素が一致していれば -1 を返します。\n\n・このプログラムでは、a[0] = "b" と b[0] = "a" で最初から異なっています。\n\n・そのため、最初の不一致インデックスである 0 が返されます。\n\n・false や true などの論理値や、配列の長さではなく、「最初に異なる位置のインデックス」が返る点に注意しましょう。',
        },
        {
            id: 16,
            category: "API",
            difficulty: "初級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.Arrays;\n 2. \n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         String[] a = {"B", "A"};\n 6.         String[] b = {"A", "B"};\n 7.         System.out.println(Arrays.compare(a, b));\n 8.     }\n 9. }',
            choices: [
                "trueが表示される",
                "falseが表示される",
                "1が表示される",
                "0が表示される",
                "-1が表示される",
            ],
            answerIndex: 2,
            explanation:
                'Arrays.compare の動作を丁寧に解説します。\n\n・Arrays.compare(配列1, 配列2) は、2つの配列を先頭から順に比較し、最初に異なる要素の大小で結果を返します。\n\n・最初に異なる要素が見つかった場合、その要素同士を compareTo で比較し、\n  配列1の方が大きければ正の数、配列2の方が大きければ負の数、等しければ次の要素を比較します。\n\n・すべての要素が等しければ、配列の長さの差で結果が決まります。\n\n・このプログラムでは、最初の要素で "B" と "A" を比較し、"B" の方が辞書順で大きいため、正の数（1）が返されます。\n\n・true や false ではなく、整数値で大小関係を返す点に注意しましょう。',
        },
        {
            id: 17,
            category: "API",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの 結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.ArrayList;\n 2. import java.util.Arrays;\n 3. import java.util.List;\n 4. \n 5. public class Main {\n 6.     public static void main(String[] args) {\n 7.         List<String> list = new ArrayList<>(\n 8.             Arrays.asList(new String[]{"A","B","C"})\n 9.         );\n10.         list.removeIf(\n11.             (String s) -> {\n12.                 return s.equals("B");\n13.             }\n14.         );\n15.         System.out.println(list);\n16.     }\n17. }',
            choices: [
                "[A, B, C]",
                "[A, C]",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                'removeIfメソッドの動作を丁寧に解説します。\n\n・removeIfは、リストの各要素に対して条件式（ラムダ式）を評価し、trueを返した要素をリストから削除します。\n\n・このプログラムでは、"B"と等しい要素だけが削除されます。\n\n・もとのリストは["A", "B", "C"]です。\n\n・removeIfによって"B"が削除され、残る要素は["A", "C"]となります。\n\n・removeIfはイテレータを内部的に使うため、ConcurrentModificationExceptionなどの例外も発生しません。\n\nこのように、条件に合致した要素だけを安全に一括削除できるのがremoveIfの特徴です。',
        },
        {
            id: 18,
            category: "API",
            difficulty: "初級",
            question:
                "次のプログラムの実行結果として「A」「B」「C」と順に表示したい。以下の空欄に入るコードとして正しいものを選びなさい。（2つ選択）",
            code: ' 1. import java.util.List;\n 2. \n 3. public class Main {\n 4.     public static void main(String[] args) {\n 5.         List<String> list = List.of("A", "B", "C");\n 6.         __________\n 7.     }\n 8. }',
            choices: [
                "<code>list.forEach(str -> System.out.println(str));</code>",
                "<code>list.for(str -> System.out.println(str));</code>",
                "<code>list.forEach(System.out::println);</code>",
                "<code>list.forEach(System.out::println());</code>",
                "<code>list.for(System.out::println);</code>",
            ],
            answerIndex: [0, 2],
            explanation:
                'forEachメソッドの使い方と動作を丁寧に解説します。\n\n・forEachは、リストの全要素に対して順番に処理を行うメソッドです。\n\n・ラムダ式（str -> System.out.println(str)）を渡すと、各要素が順に出力されます。\n\n・メソッド参照（System.out::println）を使っても、同じく各要素が順に出力されます。\n\n・forEachはリストの順序通りに処理を行うため、"A"、"B"、"C"の順に表示されます。\n\n・forEach以外のメソッド名や、メソッド参照の書き方が誤っている場合は正しく動作しません。\n\nこのように、forEachとラムダ式やメソッド参照を組み合わせることで、リストの全要素を簡単に順番に処理できます。',
        },
        {
            id: 19,
            category: "API",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. public class Item {\n 2.     private int id;\n 3.     private String name;\n 4.     public Item(int id, String name) {\n 5.         this.id = id;\n 6.         this.name = name;\n 7.     }\n 8.     public int getId() { return id; }\n 9.     public String getName() { return name; }\n10. }\n\n 1. import java.util.HashMap;\n 2. import java.util.Map;\n 3. \n 4. public class Sample {\n 5.     public static void main(String[] args) {\n 6.         Map<Integer, Item> map = new HashMap<Integer, Item>();\n 7.         map.put(1, new Item(1, "A"));\n 8.         map.put(2, new Item(2, "B"));\n 9.         map.put(3, new Item(3, "C"));\n10.         map.put(1, new Item(1, "A"));\n11.         map.put(null, new Item(0, "default"));\n12. \n13.         System.out.println(map.size());\n14.     }\n15. }',
            choices: [
                "3が表示される",
                "4が表示される",
                "5が表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                "HashMapのキーと要素数の扱いについて丁寧に解説します。\n\n・HashMapはキーと値のペアを管理するコレクションです。\n\n・同じキーでputすると、後から追加した値で上書きされます。\n\n・このプログラムでは、キー1で2回putしていますが、後の値で上書きされるため、キー1の要素は1つだけカウントされます。\n\n・さらに、nullキーも1つだけ格納できます。\n\n・最終的に、キー1、キー2、キー3、nullキーの4つが格納されているため、map.size()は4となります。\n\nHashMapはキーの重複を許さず、同じキーでputすると値が上書きされる点に注意しましょう。",
        },
    ],
};
