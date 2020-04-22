package TDPproductivitySpring.task.controllers;


import TDPproductivitySpring.task.model.Task;
import TDPproductivitySpring.task.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TaskController {
    final String url="/task";

    @Autowired private TaskService taskService;

    @PostMapping(url)
    public Task create (@RequestBody Task task){
        return taskService.save(task);
    }

    @GetMapping(url)
    public List<Task> findAll(){
        return (List<Task>)taskService.findAll();
    }

    @GetMapping(url +"/{id}")
    public Optional<Task> taskById(@PathVariable int id){
        return taskService.findById(id);
    }

    @PutMapping(url)
    public Task update(@RequestBody Task task){
        return taskService.save(task);
        }

    @ResponseStatus(value = HttpStatus.OK)
    @DeleteMapping(url +"/{id}")
    public void delete(@PathVariable int id){
        taskService.deleteById(id);
    }



}
