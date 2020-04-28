package TDPproductivitySpring.project.controllers;


import TDPproductivitySpring.project.Services.ProjectService;
import TDPproductivitySpring.project.model.Project;
import TDPproductivitySpring.task.model.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProjectController {
    final String url = "/project";

    @Autowired private ProjectService projectService;

    @PostMapping(url)
    public Project create (@RequestBody Project project){
        return projectService.save(project);
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
    public Project update(@RequestBody Project project){
        return projectService.save(project);
    }

    @PatchMapping(url+"/{id}")
    public Project updatePartialByID(@RequestBody Project project, @PathVariable int id){
        project.setId(id);
        return projectService.save(project);
    }

    @PatchMapping(url)
    public Project updatePartial(@RequestBody Project project){
        return projectService.save(project);
    }

    @ResponseStatus(value = HttpStatus.OK)
    @DeleteMapping(url +"/{id}")
    public void delete(@PathVariable int id){
        projectService.deleteById(id);
    }
}
