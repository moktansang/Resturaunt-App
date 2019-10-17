package hello.greeting;

public class Greeting {

    private final long id;
    private final String phrase;

    public Greeting(long id, String phrase) {
        this.id = id;
        this.phrase = phrase;
    }

    public long getId() {
        return id;
    }

    public String getPhrase() {
        return phrase;
    }
    
}