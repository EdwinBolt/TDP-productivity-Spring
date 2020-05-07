package TDPproductivitySpring.projectsByUser.controller;

import TDPproductivitySpring.projectsByUser.service.ProjectUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProjectUserController {
    final String url="/projectuser";

    @Autowired
    private ProjectUserService projectUserService;

    //POST PUT PATCH DELETE to update project-user relations

}
