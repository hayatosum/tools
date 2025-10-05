const SILVER_09 = {
    prefix: "KS09",
    questions: [
        {
            id: 1,
            category: "API",
            difficulty: "中級",
            question:
                "次の計算式を使い、毎年積立を行って複利運用したときの金額を計算したい。この計算を行うコードとして正しいものを選びなさい。（1つ選択）",
            code: "n = m * ((1 + r)^x - 1) / r",
            choices: [
                "n = (int) (m * (Math.pow((1 + r), x) - 1) / r);",
                "n = (int) (m * (Math.pow(x, (1 + r)) - 1) / r);",
                "n = (int) (m * (Math.sqrt((1 + r)) - 1) / r);",
                "n = (int) (m * (Math.sqrt((1 + r), x) - 1) / r);",
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
            code: 'import java.util.Comparator;\n\npublic class SampleComparator implements Comparator<Sample> {\n    @Override\n    public int compare(Sample s1, Sample s2) {\n        if (s1.getId() < s2.getId()) {\n            return 1;\n        }\n        if (s2.getId() < s1.getId()) {\n            return -1;\n        }\n        return 0;\n    }\n}\n\nimport java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        Sample[] samples = {\n            new Sample(2, "B"),\n            new Sample(3, "C"),\n            new Sample(1, "A")\n        };\n\n        List<Sample> list = new ArrayList<>(Arrays.asList(samples));\n        list.sort(new SampleComparator());\n        for (Sample s : list) {\n            System.out.println(s.getName());\n        }\n    }\n}',
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
            code: "import java.util.Arrays;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> list = Arrays.asList(new Integer[]{1, 2, 3});\n        // 空欄\n        for (Integer num : list) {\n            System.out.println(num);\n        }\n    }\n}",
            choices: [
                "list.sort((a, b) -> a.compareTo(b));",
                "list.sort(() -> a.compareTo(b));",
                "list.sort((a) -> a.compareTo(b));",
                "list.sort((a, b) -> -a.compareTo(b));",
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
            code: "public class Sample {\n    public static void main(String[] args) {\n        char a = '0';\n        int num = 0;\n        if (Character.isAlphabetic(a)) {\n            num++;\n        }\n        if (Character.isDigit(a)) {\n            num++;\n        }\n        if (Character.isLowerCase(a)) {\n            num++;\n        }\n        System.out.println(num);\n    }\n}",
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
            code: 'import java.time.LocalDate;\n\npublic class Sample {\n    public static void main(String[] args) {\n        LocalDate a = LocalDate.of(2015, 0, 1);\n        LocalDate b = LocalDate.parse("2015-01-01");\n        System.out.println(a.equals(b));\n    }\n}',
            choices: [
                "trueが表示される",
                "falseが表示される",
                "5行目でコンパイルエラーが発生する",
                "6行目でコンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 2,
            explanation:
                "LocalDate.of の月は 1 始まりであるため、0 を指定するとコンパイルエラーになる。",
        },
        {
            id: 6,
            category: "API",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイルし、実行したときの正しいものを選びなさい。なお、現在の日付を2019年8月20日とする。（1つ選択）",
            code: 'import java.time.DayOfWeek;\nimport java.time.LocalDate;\n\npublic class Sample {\n    public static void main(String[] args) {\n        LocalDate a = LocalDate.of(2019, 8, 19);\n        LocalDate b = LocalDate.now();\n        b = b.with(DayOfWeek.MONDAY);\n        System.out.println(a.equals(b) + "," + a.isBefore(b));\n    }\n}',
            choices: [
                "[true, true] と表示される",
                "[false, false] と表示される",
            ],
            answerIndex: 1,
            explanation:
                "2019/8/19 は月曜日だが、LocalDate.now() が 2019/8/20 を返すため、with(DayOfWeek.MONDAY) の使用は正しくなくエラーではなく別の結果となる。a.equals(b) は false, a.isBefore(b) は true ではなく false になる。",
        },
        {
            id: 7,
            category: "API",
            difficulty: "初級",
            question:
                "次のうち、ArrayListの説明として正しいものを選びなさい。（3つ選択）",
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
            code: 'import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList list = new ArrayList();\n        list.add("A");\n        list.add(10);\n        list.add("B");\n        for (Object obj : list) {\n            System.out.print(obj);\n        }\n    }\n}',
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
            code: 'import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> list = new ArrayList<>();\n        list.add("A");\n        list.add(2, "B");\n        list.add("C");\n        list.add("D");\n        for (String str : list) {\n            System.out.print(str);\n        }\n    }\n}',
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
            code: 'import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> list = new ArrayList<>();\n        list.add("A");\n        list.set(0, "B");\n        list.add("C");\n        list.set(1, "D");\n        for (String str : list) {\n            System.out.print(str);\n        }\n    }\n}',
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
            code: 'public class Item {\n    private String name;\n    private int price;\n    public Item(String name, int price) {\n        this.name = name;\n        this.price = price;\n    }\n    public boolean equals(Object obj) {\n        if (obj instanceof Item) {\n            Item tmp = (Item) obj;\n            if (tmp.name.equals(this.name)) {\n                return true;\n            }\n        }\n        return false;\n    }\n    public String getName() {\n        return name;\n    }\n}\n\nimport java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<Item> list = new ArrayList<>();\n        list.add(new Item("A", 100));\n        list.add(new Item("B", 200));\n        list.add(new Item("C", 300));\n        list.add(new Item("A", 100));\n        list.remove(new Item("A", 500));\n        for (Item item : list) {\n            System.out.println(item.getName());\n        }\n    }\n}',
            choices: [
                "「A」「C」と表示される",
                "「A」「B」「C」と表示される",
                "「A」と表示される",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                'equalsはnameフィールドのみを比較対象とするため、remove(new Item("A", 500)) で最初の「A」が削除される。残りは [B, C, A] で、「A」「B」「C」と出力される。',
        },
        {
            id: 12,
            category: "API",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）",
            code: 'import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> list = new ArrayList<>();\n        list.add("A");\n        list.add("B");\n        list.add("C");\n        for (String str : list) {\n            if ("B".equals(str)) {\n                list.remove(str);\n            } else {\n                System.out.println(str);\n            }\n        }\n    }\n}',
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
            code: 'import java.util.ArrayList;\n\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> list = new ArrayList<>();\n    list.add("A");\n    list.add("B");\n    list.add("C");\n    list.add("D");\n    list.add("E");\n\n    for (String str : list) {\n      if ("C".equals(str)) {\n        list.remove(str);\n      }\n    }\n\n    for (String str : list) {\n      System.out.println(str);\n    }\n  }\n}',
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
            question:
                "次のうち、値を変更できない固定長のリストを作るものを選びなさい。（2つ選択）",
            code: "",
            choices: [
                "var list = List.of(1,2,3);",
                "var list = new ArrayList<Integer>();",
                "var list = Arrays.asList(new Integer[]{1,2,3});",
                "var list = new ArrayList<Integer>(3);",
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
            code: 'import java.util.Arrays;\n\npublic class Main {\n  public static void main(String[] args) {\n    String[] a = {"b", "c"};\n    String[] b = {"a", "b", "c"};\n    System.out.println(Arrays.mismatch(a, b));\n  }\n}',
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
            code: 'import java.util.Arrays;\n\npublic class Main {\n  public static void main(String[] args) {\n    String[] a = {"B", "A"};\n    String[] b = {"A", "B"};\n    System.out.println(Arrays.compare(a, b));\n  }\n}',
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
            code: 'import java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>(\n            Arrays.asList(new String[]{"A","B","C"})\n        );\n        list.removeIf(\n            (String s) -> {\n                return s.equals("B");\n            }\n        );\n        System.out.println(list);\n    }\n}',
            choices: [
                "[A, B, C]",
                "[A, C]",
                "コンパイルエラーが発生する",
                "実行時に例外がスローされる",
            ],
            answerIndex: 1,
            explanation:
                'removeIf により "B" が削除され、残る要素は [A, C] になります。',
        },
        {
            id: 18,
            category: "API",
            difficulty: "初級",
            question:
                "次のプログラムの実行結果として「A」「B」「C」と順に表示したい。以下の空欄に入るコードとして正しいものを選びなさい。（2つ選択）",
            code: 'import java.util.List;\n\npublic class Main {\n  public static void main(String[] args) {\n    List<String> list = List.of("A", "B", "C");\n    // 空欄\n  }\n}',
            choices: [
                "list.forEach(str -> System.out.println(str));",
                "list.for(str -> System.out.println(str));",
                "list.forEach(System.out::println);",
                "list.forEach(System.out.println());",
                "list.for(System.out::println);",
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
            code: 'public class Item {\n  private int id;\n  private String name;\n  public Item(int id, String name) {\n    this.id = id;\n    this.name = name;\n  }\n  public int getId() { return id; }\n  public String getName() { return name; }\n}\n\nimport java.util.HashMap;\nimport java.util.Map;\n\npublic class Sample {\n  public static void main(String[] args) {\n    Map<Integer, Item> map = new HashMap<Integer, Item>();\n    map.put(1, new Item(1, "A"));\n    map.put(2, new Item(2, "B"));\n    map.put(3, new Item(3, "C"));\n    map.put(1, new Item(1, "A"));\n    map.put(null, new Item(0, "default"));\n\n    System.out.println(map.size());\n  }\n}',
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
