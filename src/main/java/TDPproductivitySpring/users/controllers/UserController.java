package TDPproductivitySpring.users.controllers;


import TDPproductivitySpring.users.model.User;
import TDPproductivitySpring.users.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.net.ssl.HttpsURLConnection;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
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



    @GetMapping(url +"/login")      //localhost:8080/user/login?user=user1&password=123
    public ResponseEntity<Integer> findByUsernameAndPassword(@RequestParam String user, String password, HttpServletResponse resp){

        User checkUser = userService.findByUsernameAndPassword(user, password);

        boolean correctLogIn = false;
        if (checkUser != null){
            if (checkUser.getPassword().equals(password)) {
                correctLogIn = true;
                System.out.println("correct log in");
            }
        }

        if (correctLogIn){
            return new ResponseEntity<>(checkUser.getProject(), HttpStatus.OK);
        }else
            return new ResponseEntity<>(-1,HttpStatus.OK);
/*
        if(correctLogIn)
            return new ResponseEntity<Integer>(checkUser.getProject(), HttpStatus.OK) ;
        else{
            return new ResponseEntity<String>("fout gegaan", HttpStatus.NOT_FOUND);
        }

 */



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
