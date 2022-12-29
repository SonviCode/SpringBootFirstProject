package com.sonvicode.fullstack.repository;

import com.sonvicode.fullstack.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
