package TDPproductivitySpring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class TdpProductivitySpringApplication extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(TdpProductivitySpringApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(TdpProductivitySpringApplication.class, args);
	}

}
