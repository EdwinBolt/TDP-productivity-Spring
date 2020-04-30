package TDPproductivitySpring.users.controllers;


import TDPproductivitySpring.task.model.Task;
import TDPproductivitySpring.users.model.User;
import TDPproductivitySpring.users.services.UserService;
import org.graalvm.compiler.hotspot.nodes.CurrentLockNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
    final String url="/user";

    @Autowired private UserService userService;

    @PostMapping(url)
    public User create (@RequestBody User user){
        return userService.save(user);
    }

    @GetMapping(url)
    public List<User> findAll(){
        return (List<User>)userService.findAll();
    }

    @PutMapping(url)
    public User update(@RequestBody User user){
        return userService.save(user);
    }

    @PatchMapping(url+"/{id}")
    public User updatePartialByID(@RequestBody User user, @PathVariable int id){
        user.setId(id);
        return userService.save(user);
    }

    @PatchMapping(url)
    public User updatePartial(@RequestBody User user){
        return userService.save(user);
    }

    @ResponseStatus(value = HttpStatus.OK)
    @DeleteMapping(url +"/{id}")
    public void delete(@PathVariable int id){
        userService.deleteById(id);
    }


}
