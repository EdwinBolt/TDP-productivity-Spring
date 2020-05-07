package TDPproductivitySpring.users.services;

import TDPproductivitySpring.users.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserService extends CrudRepository <User, Integer> {

    User findByUsername(String username);

    User findByUsernameAndPassword(String user, String password);
}
