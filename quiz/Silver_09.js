const JAVA_SILVER_1Z0_815_JPN_09 = {
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
                "複利計算の公式は n = m * ((1 + r)^x - 1) / r であり、Java では Math.pow((1 + r), x) を用いて実装するのが正しい。",
        },
        {
            id: 2,
            category: "API",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行した結果として、正しいものを選びなさい。（1つ選択）",
            code: ' 1. import java.util.Comparator;\n 2. \n 3. public class SampleComparator implements Comparator<Sample> {\n 4.     @Override\n 5.     public int compare(Sample s1, Sample s2) {\n 6.         if (s1.getId() < s2.getId()) {\n 7.             return 1;\n 8.         }\n 9.         if (s2.getId() < s1.getId()) {\n10.             return -1;\n11.         }\n12.         return 0;\n13.     }\n14. }\n\n 1. import java.util.ArrayList;\n 2. import java.util.Arrays;\n 3. import java.util.List;\n 4. \n 5. public class Main {\n 6.     public static void main(String[] args) {\n 7.         Sample[] samples = {\n 8.             new Sample(2, "B"),\n 9.             new Sample(3, "C"),\n10.             new Sample(1, "A")\n11.         };\n12. \n13.         List<Sample> list = new ArrayList<>(Arrays.asList(samples));\n14.         list.sort(new SampleComparator());\n15.         for (Sample s : list) {\n16.             System.out.println(s.getName());\n17.         }\n18.     }\n19. }',
            choices: [
                "「A」「B」「C」と表示される",
                "「B」「C」「A」と表示される",
                "「C」「B」「A」と表示される",
                "何も表示されない",
            ],
            answerIndex: 2,
            explanation:
                "Comparator 実装では s1 < s2 の場合に 1 を返すため、通常の昇順ではなく降順になる。したがって ID が大きい順に「C」「B」「A」と表示される。",
        },
        {
            id: 3,
            category: "API",
            difficulty: "初級",
            question:
                "次のプログラムを実行し、「3」「2」「1」と表示したい。空欄に入るコードとして正しいものを選びなさい。（1つ選択）",
            code: " 1. import java.util.Arrays;\n 2. import java.util.List;\n 3. \n 4. public class Main {\n 5.     public static void main(String[] args) {\n 6.         List<Integer> list = Arrays.asList(new Integer[]{1, 2, 3});\n 7.         // 空欄\n 8.         for (Integer num : list) {\n 9.             System.out.println(num);\n10.         }\n11.     }\n12. }",
            choices: [
                "<code>list.sort((a, b) -> a.compareTo(b));</code>",
                "<code>list.sort(() -> a.compareTo(b));</code>",
                "<code>list.sort((a) -> a.compareTo(b));</code>",
                "<code>list.sort((a, b) -> -a.compareTo(b));</code>",
            ],
            answerIndex: 3,
            explanation:
                "降順に並べるには -a.compareTo(b) を用いる必要がある。したがって「3」「2」「1」と表示される。",
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
                "文字 '0' は数字なので Character.isDigit(a) が true となり、num が 1 になる。",
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
                "LocalDate.of の月は 1 始まりであるため、0 を指定すると実行時に java.time.DateTimeException が発生する。",
        },
        {
            id: 6,
            category: "API",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの正しいものを選びなさい。なお、現在の日付を2019年8月20日とする。（1つ選択）",
            code: ' 1. import java.time.DayOfWeek;\n 2. import java.time.LocalDate;\n 3. \n 4. public class Sample {\n 5.     public static void main(String[] args) {\n 6.         LocalDate a = LocalDate.of(2019, 8, 19);\n 7.         LocalDate b = LocalDate.now();\n 8.         b = b.with(DayOfWeek.MONDAY);\n 9.         System.out.println(a.equals(b) + "," + a.isBefore(b));\n10.     }\n11. }',
            choices: [
                "[true, true] と表示される",
                "[false, false] と表示される",
                "[true, false] と表示される",
                "[false, true] と表示される",
            ],
            answerIndex: 3,
            explanation:
                "2019/8/19 は月曜日だが、LocalDate.now() が 2019/8/20 を返すため、with(DayOfWeek.MONDAY) の使用は正しくなくエラーではなく別の結果となる。a.equals(b) は false, a.isBefore(b) は true になる。",
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
                "ArrayListは動的配列であり、スレッドセーフではない。要素の追加位置を指定できる。nullや重複要素も許容されるため、選択肢A・Cは誤り。",
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
                "ジェネリクス未指定のArrayListはObject型として扱われるため、文字列と整数の両方を格納可能。for文で順に取り出して出力すると「A10B」と表示される。",
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
                "ArrayListのサイズはまだ1の段階で、index=2に要素を追加しようとするとIndexOutOfBoundsExceptionが実行時にスローされる。",
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
                'list.add("A") により [A]、set(0, "B") で [B]、add("C") で [B, C]、set(1, "D") で [B, D] となり、出力は「BD」となる。',
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
                'equalsはnameフィールドのみを比較対象とするため、remove(new Item("A", 500)) で最初の「A」が削除される。残りは [B, C, A] で、「B」「C」「A」と出力される。',
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
                "拡張for文でイテレーション中に list.remove を行うと ConcurrentModificationException がスローされる。",
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
                "拡張for文で走査中に同じリストの要素を削除すると ConcurrentModificationException が発生します。そのため正解は「実行時に例外がスローされる」です。",
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
                "List.of(...) と Arrays.asList(...) は固定長（不変またはサイズ変更不可）のリストを返します。ArrayList コンストラクタは可変長リストのため不正解です。",
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
                'Arrays.mismatch は最初に異なるインデックスを返し、完全一致なら -1 を返します。a[0] = "b" と b[0] = "a" が異なるため、最初の不一致インデックス 0 が返ります。',
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
                "Arrays.compare は辞書順比較を行います。a[0]=\"B\" と b[0]=\"A\" で 'B' > 'A' なので正の数（1）が返されます。",
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
            explanation: 'removeIf により "B" が削除され、残る要素は [A, C] になります。',
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
                "forEach メソッドでラムダ式やメソッド参照を渡すことで要素が順に出力されます。正しいのは (str -> System.out.println(str)) と (System.out::println) です。",
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
                "HashMap ではキーが重複した場合、後から追加された値で上書きされます。キー 1 は上書きされるため要素数は3→上書き後も3→さらに null キーを追加して合計4 となります。",
        },
    ],
};
