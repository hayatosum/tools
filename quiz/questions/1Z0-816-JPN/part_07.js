const Q_1Z0_816_JPN_02 = {
    prefix: "1Z0-816-JPN",
    part: "02",
    questions: [
        {
            id: "1",
            category: "汎用とコレクション",
            difficulty: "初級",
            question:
                "プリミティブ型に対応するラッパークラスとして、誤っているものを選びなさい。（1つ選択）",
            choices: ["Byte", "Integer", "Char", "Boolean"],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "2",
            category: "汎用とコレクション",
            difficulty: "中級",
            question:
                '次のコードの「/* insert code here */」に宣言できるデータ型として、正しいものを選びなさい。（1つ選択）\n\n<code> 1. public class Value&lt;T&gt; {\n 2.     T val;\n 3.     public Value(T val) {\n 4.         super();\n 5.         this.val = val;\n 6.     }\n 7.     public T getVal() {\n 8.         return val;\n 9.     }\n10. }\n\n 1. public class Test {\n 2.     public static void main(String[] args) {\n 3.         Value v = new Value("Hello");\n 4.         /* insert code here */ a = v.getVal();\n 5.     }\n 6. }</code>',
            choices: ["Object", "String", "Value", "T"],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "3",
            category: "汎用とコレクション",
            difficulty: "中級",
            question:
                "ジェネリクスで型推論をするためのダイヤモンド演算子を使用する箇所として、誤っているものを選びなさい。（1つ選択）",
            choices: ["変数への代入", "メソッドの戻り値", "メソッド呼び出しの引数", "クラス宣言"],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "4",
            category: "汎用とコレクション",
            difficulty: "中級",
            question:
                "Aクラスを継承したBクラスがあるとき、ジェネリクスの型パラメータとして使用できるものを選びなさい。（1つ選択）",
            choices: [
                "<code>Item&lt;A&gt; a = new Item&lt;B&gt;();</code>",
                "<code>Item&lt;A&gt; a = new Item&lt;A&gt;();</code>",
                "<code>Item&lt;Object&gt; a = new Item&lt;A&gt;();</code>",
                "<code>Item&lt;Object&gt; a = new Item&lt;B&gt;();</code>",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "5",
            category: "汎用とコレクション",
            difficulty: "上級",
            question:
                "型パラメータにおいて型変数が取り得る型をX型のサブタイプに制限する総称型のクラスFooの宣言として正しいものを選びなさい。（1つ選択）",
            choices: [
                "class Foo&lt;T:X&gt; {}",
                "class Foo&lt;T super X&gt; {}",
                "class Foo&lt;T extends X&gt; {}",
                "class Foo&lt;T limit X&gt; {}",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "6",
            category: "汎用とコレクション",
            difficulty: "初級",
            question:
                "変数宣言時のジェネリクスの型パラメータで、どのような型パラメータを持つ参照であっても代入できるようにしたい。要件を満たす変数宣言を選びなさい。（1つ選択）",
            choices: [
                "<code>List&lt;?&gt; list;</code>",
                "<code>List&lt;&gt; list;</code>",
                "<code>List&lt;T&gt; list;</code>",
                "<code>List&lt;*&gt; list;</code>",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "7",
            category: "汎用とコレクション",
            difficulty: "中級",
            question: "非境界ワイルドカードの特徴として、正しいものを選びなさい。（2つ選択）",
            choices: [
                "メソッドの戻り値型はObject型になる",
                "メソッドの戻り値型は、参照が持つ型パラメータとして指定した型になる",
                "メソッドの引数にはnullリテラルしか渡せない",
                "メソッドの引数にはObject型の参照しか渡せない",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "8",
            category: "汎用とコレクション",
            difficulty: "中級",
            question:
                "次のプログラムをコンパイル、実行したときの結果として、正しいものを選びなさい。（1つ選択）\n\n<code> 1. import java.util.ArrayList;\n 2. import java.util.List;\n 3. \n 4. public class Exercise {\n 5.     public static void main(String[] args) {\n 6.         List&lt;? extends Number&gt; list = new ArrayList&lt;Integer&gt;();\n 7.         list.add(10);\n 8.         list.add(20);\n 9.         list.add(30);\n10.         \n11.         for (Number n : list) {\n12.             System.out.println(n);\n13.         }\n14.     }\n15. }</code>",
            choices: [
                "addメソッドの行でコンパイルエラーが発生する",
                "for文でコンパイルエラーが発生する",
                "「10」「20」「30」と表示される",
                "実行時に例外がスローされる",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "9",
            category: "汎用とコレクション",
            difficulty: "上級",
            question:
                "次のような関係のクラスがあった場合に使用できるコードとして、正しいものを選びなさい。（2つ選択）",
            choices: [
                "Test&lt;? super B&gt; = new Test&lt;A&gt;();",
                "Test&lt;? super B&gt; = new Test&lt;B&gt;();",
                "Test&lt;? super B&gt; = new Test&lt;C&gt;();",
                "Test&lt;? super B&gt; = new Test&lt;D&gt;();",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "10",
            category: "汎用とコレクション",
            difficulty: "初級",
            question:
                "インデックスによって順序付けられたデータ構造の機能を定義するコレクション・インタフェースとして、正しいものを選びなさい。（1つ選択）",
            choices: ["java.util.Map", "java.util.Collection", "java.util.List", "java.util.Set"],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "11",
            category: "汎用とコレクション",
            difficulty: "中級",
            question:
                "java.util.Queueインタフェースが表現するデータ構造に関する説明として、正しいものを選びなさい。（1つ選択）",
            choices: [
                "参照されていない時間が最も長いデータを優先的に取得する",
                "直近で利用されたデータを優先的に取得する",
                "最初に入れたデータが最初に取り出される",
                "最後に入れたデータが最初に取り出される",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "12",
            category: "汎用とコレクション",
            difficulty: "中級",
            question:
                "java.util.Dequeインタフェースに関する説明として、正しいものを選びなさい。（1つ選択）",
            choices: [
                "要素を管理するオブジェクトを数珠つなぎにして管理する",
                "インデックスによる要素へのアクセスをサポートする",
                "両端から要素を挿入・削除できるデータ構造を定義する",
                "最初に格納した要素を最後に取り出すことでのぞき見の仕組みを提供する",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "13",
            category: "汎用とコレクション",
            difficulty: "中級",
            question:
                "java.util.Setインタフェースに関する説明として、正しいものを選びなさい。（1つ選択）",
            choices: [
                "HashSetの要素は自然順序で並ぶ",
                "TreeSetの要素の並び順は保証されない",
                "重複する要素を許可しない",
                "キーと値のペアを要素として管理する",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "14",
            category: "汎用とコレクション",
            difficulty: "中級",
            question:
                "java.util.Mapインタフェースに関する説明として、正しいものを選びなさい。（1つ選択）",
            choices: [
                "実装クラスとしてVectorクラスやStackクラスを提供している",
                "一意なキーとひも付けられた値のペア要素を扱う",
                "インデックスによって順序付けられた要素を扱う",
                "重複を許さない集合を扱う",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "15",
            category: "汎用とコレクション",
            difficulty: "上級",
            question:
                'Mapオブジェクトに格納されているキーと値を取り出して表示する場合に、/* insert code here */ に入るコードとして、正しいものを選びなさい。（1つ選択）\n\n<code> 1. import java.util.Map;\n 2. \n 3. public class Test {\n 4.     public static void main(String[] args) {\n 5.         var a = Map.entry(1, "A");\n 6.         var b = Map.entry(2, "B");\n 7.         var c = Map.entry(3, "C");\n 8.         Map&lt;Integer, String&gt; map = Map.ofEntries(a, b, c);\n 9. \n10.         for (/* insert code here */) {\n11.             System.out.println(entry.getKey() + ":" + entry.getValue());\n12.         }\n13.     }\n14. }</code>',
            choices: [
                "<code>Map&lt;Integer, String&gt; entry : map.getEntry()</code>",
                "<code>Set&lt;Integer, String&gt; entry : map.entrySet()</code>",
                "<code>Map.Entry&lt;Integer, String&gt; entry : map.entrySet()</code>",
                "<code>Set.Entry&lt;Integer, String&gt; entry : map.getEntry()</code>",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "16",
            category: "汎用とコレクション",
            difficulty: "上級",
            question:
                "java.lang.ComparableのcompareToメソッドに関する説明として、正しいものを選びなさい。（3つ選択）",
            choices: [
                "自分自身が比較対象よりも前に位置するように並べ替えるのであれば、正の整数を戻す",
                "自分自身が比較対象よりも前に位置するように並べ替えるのであれば、負の整数を戻す",
                "自分自身が比較対象よりも後に位置するように並べ替えるのであれば、正の整数を戻す",
                "自分自身が比較対象よりも後ろに位置するように並べ替えるのであれば、負の整数を戻す",
                "比較対象と同値であり、並べ替える必要がないのであれば0を戻す",
                "比較対象と同値であり、並べ替える必要がないのであれば負の整数を戻す",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "17",
            category: "汎用とコレクション",
            difficulty: "上級",
            question:
                "次のプログラムを確認してください。このProductクラスのidフィールドで比較を行うComparatorインタフェースのメソッド実装として、正しいものを選びなさい。（1つ選択）\n\n<code> 1. public class Product {\n 2.     private int id;\n 3.     public Product(int id) {\n 4.         super();\n 5.         this.id = id;\n 6.     }\n 7.     public int getId() {\n 8.         return id;\n 9.     }\n10. }</code>",
            choices: [
                "<code>Comparator&lt;Product&gt; c = p -&gt; p.getId();</code>",
                "<code>Comparator&lt;Product&gt; c = (p1, p2) -&gt; p1.getId() - p2.getId();</code>",
                "<code>Comparator&lt;Product&gt; c = p -&gt; p.hashCode();</code>",
                "<code>Comparator&lt;Product&gt; c = (p1, p2) -&gt; p1.getId() / p2.getId();</code>",
            ],
            answerIndex: "",
            explanation: "",
        },
    ],
};
