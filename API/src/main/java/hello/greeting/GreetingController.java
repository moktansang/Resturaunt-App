package hello.greeting;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * @RestController notes that this class should be
 * treated as a controller for the API for Spring
 */
@RestController
public class GreetingController {
    
    private static final String template = "Hello, %s";
    private final AtomicLong counter = new AtomicLong();

    /**
     * @RequestMapping makes the url ending with "/greeting" run this function
     * @RequestParam is a url query parameter. Use by doing something like locahost:8080/greeting?name=myName
     * @param name
     * @return Greeting JSON
     */
    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name ) {
        Greeting newGreeting = new Greeting(counter.incrementAndGet(), String.format(template, name));
        return newGreeting;
    }

}