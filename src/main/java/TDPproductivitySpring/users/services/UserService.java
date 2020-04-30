package TDPproductivitySpring.users.services;

import TDPproductivitySpring.users.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserService extends CrudRepository <User, Integer> {



}
