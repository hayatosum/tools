const Q_1Z0_816_JPN_02 = {
    prefix: "1Z0-816-JPN",
    part: "02",
    questions: [
        {
            id: "1",
            category: "並列処理",
            difficulty: "中級",
            question:
                '次のプログラムをコンパイル、実行した結果として、正しいものを選びなさい。（1つ選択）\n<code> 1.  public class Main {\n 2.      public static void main(String[] args) {\n 3.          Thread t = new Thread() {\n 4.              @Override\n 5.              public synchronized void start() {\n 6.                  super.start();\n 7.                  System.out.println("A");\n 8.              }\n 9.              @Override\n10.              public void run() {\n11.                  super.run();\n12.                  System.out.println("B");\n13.              }\n14.          };\n15.          t.run();\n16.      }\n17.  }</code>',
            choices: [
                "「A」だけが表示される",
                "「B」だけが表示される",
                "常に「A」「B」の順に表示される",
                "常に「B」「A」の順に表示される",
                "「A」と「B」の両方が表示されるが、順序は不定である",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "2",
            category: "並列処理",
            difficulty: "初級",
            question:
                "マルチスレッドで並行処理を行うための記述として、正しいものを選びなさい。（2つ選択）",
            choices: [
                "Threadクラスを継承したクラスを作り、runメソッドをオーバーライドする",
                "Threadクラスを継承したクラスを作り、startメソッドをオーバーライドする",
                "Runnableインタフェースを実装したクラスを作り、runメソッドを実装する",
                "Runnableインタフェースを実装したクラスを作り、startメソッドを実装する",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "3",
            category: "並列処理",
            difficulty: "中級",
            question:
                "あらかじめいくつかのスレッドを作ってプールしておき、時間の経過で不要なスレッドを削除するExecutorServiceを取得するExecutorsクラスのメソッドとして、正しいものを選びなさい。（1つ選択）",
            choices: [
                "newSingleThreadExecutorメソッド",
                "newFixedThreadPoolメソッド",
                "newCachedThreadPoolメソッド",
                "newManagedThreadPoolメソッド",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "4",
            category: "並列処理",
            difficulty: "中級",
            question:
                "java.util.concurrent.ScheduledExecutorServiceインタフェースを使って、1秒後にコンソールに「done.」と表示する遅延実行スレッドを作りたい。正しいコードを選びなさい。（1つ選択）",
            choices: [
                '<code>exec.schedule(() -> {\n    System.out.println("done.");\n}, 1, TimeUnit.SECONDS);</code>',
                '<code>exec.schedule(() -> {\n    System.out.println("done.");\n}, 1000);</code>',
                '<code>exec.execute(() -> {\n    System.out.println("done.");\n}, 1, TimeUnit.SECONDS);</code>',
                '<code>exec.execute(() -> {\n    System.out.println("done.");\n}, 1000);</code>',
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "5",
            category: "並列処理",
            difficulty: "初級",
            question:
                "java.util.concurrent.ScheduledExecutorServiceインタフェースを使って処理を定期的に実行したい。使用するメソッドとして正しいものを選びなさい。（1つ選択）",
            choices: [
                "scheduleメソッド",
                "scheduleAtFixedRateメソッド",
                "repeatメソッド",
                "scheduleAtLoopメソッド",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "6",
            category: "並列処理",
            difficulty: "中級",
            question:
                "マルチスレッドで、タスクをほぼ一定間隔で実行したい。java.util.concurrent.ScheduledExecutorServiceインタフェースのどのメソッドを使用すればよいか。正しいものを選びなさい。（1つ選択）",
            choices: [
                "scheduleメソッド",
                "scheduleAtFixedRateメソッド",
                "scheduleWithFixedDelayメソッド",
                "scheduleDelayメソッド",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "7",
            category: "並列処理",
            difficulty: "中級",
            question:
                "java.util.concurrent.ScheduledExecutorServiceインタフェースを使用し、複数のタスクをプールしながら効率よくマルチスレッドによる処理を実行したい。使用するメソッドとして、正しいものを選びなさい。（1つ選択）",
            choices: [
                "ScheduledExecutorServiceのnewThreadPoolメソッド",
                "ScheduledExecutorServiceのnewScheduledThreadPoolメソッド",
                "ExecutorsのnewThreadPoolメソッド",
                "ExecutorsのnewScheduledThreadPoolメソッド",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "8",
            category: "並列処理",
            difficulty: "中級",
            question:
                "Runnableインタフェースを使ってマルチスレッドによる処理を実行している。java.util.concurrent.Futureのgetメソッドは、スレッドが終了した時点で何を受け取るか。正しいものを選びなさい。（1つ選択）",
            choices: [
                "int型の整数",
                "boolean型の真偽値",
                "java.util.concurrent.Result型の列挙定数",
                "null",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "9",
            category: "並列処理",
            difficulty: "上級",
            question:
                "次のコードを実行したとき、java.util.concurrent.Futureインタフェースのgetメソッドの戻り値として、正しいものを選びなさい。（1つ選択）\n<code> 1.  Future&lt;Integer&gt; future = exec.submit(() -> {\n 2.      try {\n 3.          // do something\n 4.      } catch (InterruptedException e) {\n 5.          throw new RuntimeException(e);\n 6.      }\n 7.  }, 0);</code>",
            choices: ["負の整数", "0", "null", "RuntimeExceptionがスローされる"],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "10",
            category: "並列処理",
            difficulty: "中級",
            question: "RunnableとCallableの特徴として、正しいものを選びなさい。（2つ選択）",
            choices: [
                "Runnableは戻り値を戻せない",
                "Runnableは戻り値の戻り値を戻せる",
                "Callableは戻り値を戻せない",
                "Callableは任意の戻り値を戻せる",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "11",
            category: "並列処理",
            difficulty: "中級",
            question:
                "java.util.concurrent.Callableインタフェースを使ってタスクを定義している。タスク内で例外SampleExceptionをスローした場合、それを受け取る側では何型の例外を捕捉するcatchブロックを用意すればよいか。最も適切なものを選びなさい。（1つ選択）",
            choices: [
                "SampleException",
                "ExecutionException",
                "FutureException",
                "ConcurrentException",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "12",
            category: "並列処理",
            difficulty: "中級",
            question:
                "複数のスレッドの終了を待って処理する同期処理を実現したい。使用するクラスあるいはインタフェースとして、正しいものを選びなさい。（1つ選択）",
            choices: [
                "CyclicBarrier",
                "CopyOnWriteArrayList",
                "ExecutorService",
                "ScheduledExecutorService",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "13",
            category: "並列処理",
            difficulty: "初級",
            question:
                "マルチスレッド・アプリケーションで共有されるインスタンスで、競合が発生しないよう排他制御をしたい。このときに使用するキーワードとして、正しいものを選びなさい。（1つ選択）",
            choices: ["synchronized", "volatile", "strictfp", "transient"],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "14",
            category: "並列処理",
            difficulty: "中級",
            question:
                "複数のスレッドの間で、排他制御された複数のインスタンスを共有していて、それぞれのインスタンス同士が連携することで発生する待ち状態を意味する用語として、正しいものを選びなさい。（1つ選択）",
            choices: ["待ち行列", "デッドロック", "同期化", "ライブロック"],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "15",
            category: "並列処理",
            difficulty: "中級",
            question:
                "synchronizedを使わず、フィールドの競合が発生しないようにするために用意されたクラスとメソッドとして、正しいものを選びなさい。（1つ選択）",
            choices: [
                "IntegerのaddAndGetメソッド",
                "Integerのgetメソッド",
                "AtomicIntegerのaddAndGetメソッド",
                "AtomicIntegerのgetメソッド",
            ],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "16",
            category: "並列処理",
            difficulty: "中級",
            question:
                "マルチスレッド・アプリケーションで、あるコレクションを複数のスレッドで共有している。一方のスレッドがコレクションから要素を削除している最中に、もう一方が要素を加えても例外が発生しないコレクションはどれか。正しいものを選びなさい。（1つ選択）",
            choices: ["ArrayList", "Vector", "ThreadSafeList", "CopyOnWriteArrayList"],
            answerIndex: "",
            explanation: "",
        },
        {
            id: "17",
            category: "並列処理",
            difficulty: "上級",
            question:
                "複数のメソッドにまたがる排他制御を実現したい。最も適切な方法を選びなさい。（1つ選択）",
            choices: [
                "クラス宣言をsynchronizedで修飾する",
                "排他制御したいすべてのメソッドをsynchronizedで修飾する",
                "java.util.concurrent.atomicパッケージに属するクラスを利用する",
                "ReentrantLockクラスを利用する",
            ],
            answerIndex: "",
            explanation: "",
        },
    ],
};
