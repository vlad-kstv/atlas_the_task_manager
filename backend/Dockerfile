FROM maven:3.9.6-eclipse-temurin-21

WORKDIR /backend

COPY . .

RUN mvn clean package -DskipTests

CMD ["java", "-jar", "target/taskmanager-0.0.1-SNAPSHOT.jar"]