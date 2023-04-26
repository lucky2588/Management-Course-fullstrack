package com.demo.train.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name",nullable = false)
    private String name;

    @Column(name = "email",nullable = false)
    @JdbcTypeCode(SqlTypes.LONGVARCHAR)
    private String email;
    @Column(name = "phone")
    private String phone;

    @Column(name = "avatar")
    private String avatar;


}