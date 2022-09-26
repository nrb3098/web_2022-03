package com.panteras.pack;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Pantera {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Getter@Setter private int idPantera;
    @Getter@Setter private String Name;


    protected Pantera() {}

    public Pantera(String Name) {
        this.Name = Name;

    }

    @Override
    public String toString() {
        return String.format(
                "com.panteras.pack.Pantera[id=%d, Name='%s']",
                idPantera, Name);
    }

}
