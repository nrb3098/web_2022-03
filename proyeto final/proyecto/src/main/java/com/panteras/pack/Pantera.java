package com.panteras.pack;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Data
public class Pantera {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private int idPantera;
    @Column(nullable = false)
    private String name;



    protected Pantera() {}

    public Pantera(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return String.format(
                "com.panteras.pack.Pantera[id=%d, Name='%s']",
                idPantera, name);
    }

}
