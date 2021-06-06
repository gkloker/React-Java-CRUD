package net.java.springbootbackend.controller;
import net.java.springbootbackend.exception.ResourceNotFoundException;
import net.java.springbootbackend.model.User;
import net.java.springbootbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    // Get all users
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Create user
    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    // Get user by id
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserId(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User don't exist id: " + id));

        return ResponseEntity.ok(user);
    }

    // Upsate user
    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User data) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User don't exist id: " + id));

        user.setFirstName(data.getFirstName());
        user.setLastName(data.getLastName());
        user.setBirthday(data.getBirthday());
        user.setDni(data.getDni());

        User updateUser = userRepository.save(user);
        return ResponseEntity.ok(updateUser);
    }

    // Delete user
    @DeleteMapping("/users/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User don't exist id: " + id));

        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);

        return ResponseEntity.ok(response);
    }
}