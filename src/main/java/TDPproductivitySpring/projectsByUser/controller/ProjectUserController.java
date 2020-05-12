package TDPproductivitySpring.projectsByUser.controller;

import TDPproductivitySpring.projectsByUser.model.ProjectUser;
import TDPproductivitySpring.projectsByUser.service.ProjectUserService;
import TDPproductivitySpring.users.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProjectUserController {
    final String url="/projectuser";

    @Autowired
    private ProjectUserService projectUserService;

    //POST PUT PATCH DELETE to update project-user relations
    @PostMapping(url)
    public ProjectUser create (@RequestBody ProjectUser projectUser){
        return projectUserService.save(projectUser);
    }

    @GetMapping(url)
    public List<ProjectUser> findAll(){
        return (List<ProjectUser>)projectUserService.findAll();
    }

    @PutMapping(url)
    public ProjectUser update(@RequestBody ProjectUser projectUser){
        return projectUserService.save(projectUser);
    }

    @PatchMapping(url)
    public ProjectUser updatePartial(@RequestBody ProjectUser projectUser){
        return projectUserService.save(projectUser);
    }

    @ResponseStatus(value = HttpStatus.OK)
    @DeleteMapping(url +"/{id}")
    public void delete(@PathVariable int id){
        projectUserService.deleteById(id);
    }
}
