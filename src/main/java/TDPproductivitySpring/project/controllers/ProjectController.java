package TDPproductivitySpring.project.controllers;


import TDPproductivitySpring.project.Services.ProjectService;
import TDPproductivitySpring.project.model.Project;
import TDPproductivitySpring.projectsByUser.model.ProjectUser;
import TDPproductivitySpring.projectsByUser.service.ProjectUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProjectController {
    final String url = "/project";

    @Autowired private ProjectService projectService;
    @Autowired private ProjectUserService projectUserService;

    @PostMapping(url)
    public Project create (@RequestBody ProjectUser PU){
        projectService.save(PU.getProject());
        projectUserService.save(PU);
        return PU.getProject();
    }

    @GetMapping(url)
    public List<Project> findAll(){
        return (List<Project>)projectService.findAll();
    }

    @GetMapping(url +"/{id}")
    public Optional<Project> projectById(@PathVariable int id){
        return projectService.findById(id);
    }

    @PutMapping(url)
    public Project update(@RequestBody ProjectUser PU){
        projectService.save(PU.getProject());
        projectUserService.save(PU);
        return PU.getProject();
    }

    @PatchMapping(url+"/{id}")
    public Project updatePartialByID(@RequestBody ProjectUser PU, @PathVariable int id){
        PU.project.setId(id);
        projectService.save(PU.getProject());
        projectUserService.save(PU);
        return PU.getProject();
    }

    @PatchMapping(url)
    public Project updatePartial(@RequestBody ProjectUser PU){
        projectService.save(PU.getProject());
        projectUserService.save(PU);
        return PU.getProject();
    }

    @ResponseStatus(value = HttpStatus.OK)
    @DeleteMapping(url +"/{id}")
    public void delete(@PathVariable int id){
        projectService.deleteById(id);
    }
}
